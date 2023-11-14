import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('blocking')
  blocking(): string {
    return this.appService.blocking();
  }

  @Get('non-blocking')
  nonBlocking(): Promise<string> {
    return this.appService.nonBlocking();
  }
}
