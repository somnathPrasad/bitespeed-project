import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IdentifyUserDto } from './identify.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/identify')
  identify(@Body() identifier: IdentifyUserDto) {
    return 'identifying'
  }
}
