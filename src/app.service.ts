import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger();

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

  async promises(): Promise<string[]> {
    const result = [];
    for (let i = 0; i < 10; i++) {
      result.push(await this.sleep());
    }
    return result;
  }

  async promisesParallel(): Promise<string[]> {
    const result = [];
    for (let i = 0; i < 10; i++) {
      result.push(this.sleep());
    }
    return Promise.all(result);
  }

  private async sleep() {
    return new Promise((resolve) => {
      this.logger.log('Start Sleeping');
      setTimeout(() => {
        this.logger.log('End Sleeping');
        resolve('Prosessing done');
      }, 1000);
    });
  }
}
