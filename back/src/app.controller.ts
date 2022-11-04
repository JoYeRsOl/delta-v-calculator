import { Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(@Inject(AppService) private readonly appService: AppService) {}
  @Get('/aboba/:id/')
  getHello(@Param('id') id: number): string {
    return this.appService.getHello();
  }
}
