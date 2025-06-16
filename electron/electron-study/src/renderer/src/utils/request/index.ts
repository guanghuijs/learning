import axios from 'axios';
import { ElMessage, ElLoading, type LoadingInstance } from 'element-plus'; // 如果你使用了 Element Plus

const { DEV, VITE_API_HOST } = import.meta.env;
// 创建 Axios 实例
const instance = axios.create({
  baseURL: `${DEV ? '' : VITE_API_HOST}/api`, // 设置默认 API 地址
  timeout: 5000, // 设置请求超时时间
  headers: { 'Content-Type': 'application/json' } // 设置默认请求头
});

let loading: LoadingInstance | undefined;
// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    loading = ElLoading.service({
      lock: true,
      text: '加载中...',
      background: 'rgba(0, 0, 0, 0.2)'
    });

    const token =
      localStorage.getItem('token') ||
      '9f5c5afc128101ca7994.dcee1904ab.1c1b4828ec660faf0652.c6ee1.b7a1c450ff'; // 假设 token 存储在 localStorage 中

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    loading?.close();
    return response.data; // 直接返回响应数据
  },
  (error) => {
    loading?.close();
    if (error.response) {
      const { status } = error.response;
      switch (status) {
        case 401:
          ElMessage.error('未授权，请重新登录');
          break;
        case 404:
          ElMessage.error('请求的资源不存在');
          break;
        default:
          ElMessage.error('请求失败，请稍后再试');
      }
    } else {
      ElMessage.error('请求失败，请检查网络连接');
    }
    return Promise.reject(error);
  }
);

export default instance;
