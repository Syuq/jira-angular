import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This is a simple API for Quan ly du an app. For more info, visit https://github.com/Syuq/projectManagementangular-clone';
  }
}
