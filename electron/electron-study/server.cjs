const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 9989;

const FILES_DIR = path.join(__dirname, 'dist');

// 1️⃣ 静态资源：GET /static/filename  可直接预览
// 浏览器访问 http://localhost:3000/static/logo.png  就能看到图
app.use(
  '/static',
  express.static(FILES_DIR, {
    // 可选：让未知 MIME 的文件直接下载
    setHeaders(res, filePath) {
      if (!res.get('Content-Type')) {
        res.set('Content-Type', 'application/octet-stream');
      }
    }
  })
);

// 2️⃣ 强制下载接口：GET /download/filename
// 浏览器访问 http://localhost:3000/download/report.pdf  会弹出“另存为”
app.get('/download/:filename', (req, res) => {
  const fileName = req.params.filename;
  const filePath = path.join(FILES_DIR, fileName);

  // 简单安全校验
  if (!filePath.startsWith(FILES_DIR) || !fs.existsSync(filePath)) {
    return res.status(404).send('Not Found');
  }

  res.download(filePath); // Express 内置：Content-Disposition: attachment
});

app.listen(PORT, () => {
  console.log(`Server ready:
   • Static   http://localhost:${PORT}/static/<filename>
   • Download http://localhost:${PORT}/download/<filename>`);
});
