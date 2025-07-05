/**
 * 留言板
 */
import { Controller, Get, Inject, Query } from '@midwayjs/core';
import { WeatherInfo } from '../interface';
import { WeatherService } from '../service/weather.service';

@Controller('/message-board')
export class HomeController {
  @Inject()
  weatherService: WeatherService;

  @Get('/weather')
  async getWeatherInfo(@Query('cityId') cityId: string): Promise<WeatherInfo> {
    return this.weatherService.getWeather(cityId);
  }
}
