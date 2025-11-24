import { autoUpdater } from 'electron-updater';
import { app, BrowserWindow, ipcMain } from 'electron';
import path, { join } from 'path';
import fs from 'fs';
import axios from 'axios';

export function initUpdater(callBack?: () => void) {
  const { DEV } = import.meta.env;
  console.log(import.meta.env);

  const loadingWindow = new BrowserWindow({
    width: 600,
    height: 350,
    frame: false,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      partition: String(+new Date()) // 独立 session，清除缓存
    }
  });

  ipcMain.handle('renderer-to-main', async (_e, updateType) => {
    if (!updateType) {
      loadingWindow.close();
    } else {
      loadingWindow.webContents.send('main-to-renderer', {
        name: 'update-type',
        event: 'event',
        msg: updateType === 1 ? '增量更新中...' : '全量更新中...',
        data: null
      });
      if (updateType === 2) {
        autoUpdater.autoDownload = true;
        await autoUpdater.checkForUpdates();
      } else {
        // todo 执行增量跟新逻辑
        // 2. 下载
        // http://localhost:9989/win-unpacked/resources/app.asar
        downloadFile('http://localhost:9989/download/app.asar', 'app66.asar')
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      }
    }
  });

  autoUpdater.autoDownload = false;
  if (DEV) {
    Object.defineProperty(app, 'isPackaged', {
      get() {
        return true;
      }
    });
    // 指定更新配置文件位置（开发时用dev-app-update.yml）
    autoUpdater.updateConfigPath = path.join(
      __dirname,
      '../../dev-app-update.yml'
    );
    // autoUpdater.setFeedURL(
    //   'https://thailand-mall-preview-admin-th.huayitongkeji.com/update'
    // );
  }
  // else {
  //   autoUpdater.updateConfigPath = path.join(
  //     __dirname,
  //     '../../resources/app-update.yml'
  //   );
  // }
  // else {
  //   autoUpdater.setFeedURL(
  //     'https://thailand-mall-preview-admin-th.huayitongkeji.com/update'
  //   );
  // }

  loadingWindow
    .loadFile(join(__dirname, '../../resources/loading/loading.html'))
    .then((r) => {
      console.log(r);
    });

  loadingWindow.on('ready-to-show', () => {
    loadingWindow.webContents.send('main-to-renderer', {
      name: 'app-info',
      event: 'event',
      msg: [
        `版本: ${app.getVersion()}`,
        `目录: ${DEV ? process.cwd() : path.dirname(app.getAppPath())}`,
        `vite DEV: ${DEV}`,
        `process DEV: ${process.env.NODE_ENV}`,
        `__dirname: ${__dirname}`
      ],
      data: null
    });

    // 检查是否有新版本
    autoUpdater.on('checking-for-update', () => {
      loadingWindow.webContents.send('main-to-renderer', {
        name: 'checking-for-update',
        event: 'event',
        msg: `检查是否有新版本${app.getVersion()}`,
        data: null
      });
    });

    autoUpdater.on('update-available', () => {
      loadingWindow.webContents.send('main-to-renderer', {
        name: 'update-available',
        event: 'event',
        msg: '发现新版本，请选择跟新方式',
        data: null
      });
    });

    autoUpdater.on('update-not-available', () => {
      loadingWindow.webContents.send('main-to-renderer', {
        name: 'update-not-available',
        event: 'event',
        msg: `当前版本已经是最新版本，无需更新。`,
        data: null
      });
      setTimeout(() => {
        callBack?.();
        loadingWindow.close();
      }, 2000);
    });

    autoUpdater.on('download-progress', ({ percent }) => {
      loadingWindow.webContents.send('main-to-renderer', {
        name: 'download-progress',
        event: 'event',
        msg: `更新中(${percent}%)...`,
        data: null
      });
    });

    autoUpdater.on('update-downloaded', () => {
      loadingWindow.webContents.send('main-to-renderer', {
        name: 'update-downloaded',
        event: 'event',
        msg: `下载完成,将自动安装...`,
        data: null
      });
      setTimeout(() => {
        autoUpdater.quitAndInstall();
        callBack?.();
        loadingWindow.close();
      }, 2000);
    });

    autoUpdater.on('error', (err) => {
      loadingWindow.webContents.send('main-to-renderer', {
        name: 'err',
        event: 'event',
        msg: JSON.stringify(err),
        data: null
      });
    });

    if (DEV) {
      autoUpdater.checkForUpdates();
    } else {
      autoUpdater.checkForUpdatesAndNotify();
    }
  });
}

async function downloadFile(url, filename) {
  process.noAsar = true;
  const downloadPath = path.join(process.cwd(), filename);
  try {
    const res = await axios({
      url: url,
      method: 'GET',
      responseType: 'stream',
      onDownloadProgress(event) {
        if (event.total) {
          const percentCompleted = Math.round(
            (event.loaded * 100) / event.total
          );
          console.log(`jindu ${percentCompleted}%`);
        }
      }
    });

    // 将二进制数据写入文件
    // fs.writeFileSync(downloadPath, Buffer.from(response.data));
    const stream = fs.createWriteStream(downloadPath);
    res.data.pipe(stream);
    return new Promise((resolve, reject) => {
      stream.on('finish', () => {
        resolve('download completes');
      });
      stream.on('error', reject);
    });
  } catch (error) {
    console.error('下载文件失败:', '');
    throw error;
  }
}
