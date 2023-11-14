import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  blocking(): string {
    const now = new Date();
    while (new Date().getTime() < now.getTime() + 10000) {
      // do nothing
    }
    return 'Hello world after 10 seconds from blocking code!';
  }

  async nonBlocking(): Promise<string> {
    return new Promise(async (resolve) => {
      setTimeout(() => {
        return resolve('Hello world after 10 seconds from non-blocking code!');
      }, 10000);
    });
  }
}
