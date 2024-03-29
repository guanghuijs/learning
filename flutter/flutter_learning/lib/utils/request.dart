/*
 * @Author: HaiJun
 * @FilePath: \flutter_demo_show\lib\utils\http.dart
 * @Description: 
 * 
 */
import 'package:bruno/bruno.dart';
import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import './custom_interceptor.dart';

class HttpApi {
  // 配置基本的请求选项
  static final BaseOptions options = BaseOptions(
    baseUrl: 'http://192.168.20.17:8081/dev', // 设置请求的基础 URL
    method: 'GET', //默认请求方法
    connectTimeout: const Duration(seconds: 5), // 设置连接超时时间为 5 秒
    receiveTimeout: const Duration(seconds: 3), // 设置接收超时时间为 3 秒
    headers: {
      'User-Agent': 'Dio', // 设置请求头信息
      // 'token': 'dev-token'
    },
  );
  static Dio dio = Dio(options);

  static Future<T> get<T>(String url, BuildContext context,
      {Map<String, dynamic>? params}) async {
    return request(url, context, method: 'get', params: params);
  }

  static Future<T> post<T>(String url, BuildContext context,
      {Map<String, dynamic>? params}) async {
    return request(url, context, method: 'post', params: params);
  }

  static Future<T> request<T>(String url, BuildContext context,
      {method, Map<String, dynamic>? params}) async {
    //显示
    BrnLoadingDialog.show(context);
    // 1请求的单独配置
    final options = Options(method: method);
    print(options.toString());
    // 2 添加一个拦截器
    Interceptor inter = InterceptorsWrapper(
      onRequest: (options, handler) {
        print('请求拦截');
        return handler.next(options);
      },
      onResponse: (e, handler) {
        BrnLoadingDialog.dismiss(context);
        print('响应拦截');
        return handler.next(e);
      },
      onError: (e, handler) {
        BrnLoadingDialog.dismiss(context);
        print('错误拦截');
        return handler.next(e);
      },
    );

    List<Interceptor> inters = [];
    inters.add(inter); // 拦截
    inters.add(CustomInterceptor()); //添加自定义拦截器
    // inters.add(LogInterceptor()); //添加内置拦截器

    dio.interceptors.addAll(inters);

    // 3 发起网络请求
    try {
      Response response =
          await dio.request<T>(url, queryParameters: params, options: options);
      //显示
      BrnLoadingDialog.dismiss(context);
      BrnToast.show('请求成功', context);
      return response.data;
    } on DioException catch (e) {
      BrnToast.show(e.response?.data['message'], context);
      return Future.error(e);
    }
  }
}

// 作者：程序员海军
// 链接：https://juejin.cn/post/7311254319324463139
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。