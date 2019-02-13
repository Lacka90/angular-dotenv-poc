import { convict } from './config/convict';

export class ConfigService {
  private config = convict;

  public getConfig() {
    return this.config;
  }
}
