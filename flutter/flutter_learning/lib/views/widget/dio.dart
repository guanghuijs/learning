import 'package:dio/dio.dart';

class NetworkService {
  // 创建一个Dio实例
  static final Dio _dio = Dio();

  // 基础URL
  static const String BASE_URL = 'https://api.example.com';

  // 请求拦截器（可选）
  // _dio.interceptors.add(InterceptorsWrapper(
  //   onRequest: (options, handler) async {
  //     // 在发送请求之前做些什么
  //     return handler.next(options);
  //   },
  //   onResponse: (response, handler) async {
  //     // 对响应数据做点什么
  //     return handler.next(response);
  //   },
  //   onError: (DioError e, handler) async {
  //     // 处理错误
  //     return handler.next(e);
  //   },
  // ));

  // 发送GET请求
  Future<Response<dynamic>> get(String path,
      {Map<String, dynamic>? queryParameters}) async {
    try {
      Response<dynamic> response =
          await _dio.get('$BASE_URL/$path', queryParameters: queryParameters);
      return response;
    } on DioException catch (e) {
      throw handleError(e);
    }
  }

  // 发送POST请求
  Future<Response<dynamic>> post(String path,
      {Map<String, dynamic>? data}) async {
    try {
      Response<dynamic> response =
          await _dio.post('$BASE_URL/$path', data: data);
      return response;
    } on DioException catch (e) {
      throw handleError(e);
    }
  }

  // 处理错误
  DioException handleError(DioException e) {
    if (e.response != null) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      print('服务器错误: ${e.response?.statusCode}');
      print('响应内容: ${e.response?.data}');
    } else if (e.response != null) {
      // 请求已发出，但没有收到任何响应
      print('请求错误: ${e.response?.statusMessage}');
    } else {
      // 发生在设置请求或发送请求之前
      print('发生错误: ${e.message}');
    }
    return e;
  }
}
