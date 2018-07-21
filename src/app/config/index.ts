import * as loadedConvict from '!val-loader!./convict-loader';
import * as loadedDotenv from '!val-loader!./dotenv-loader';

export interface IConvict {
  env: 'production' | 'development' | 'test' | 'local' | 'stage';
  api: string;
}

export interface IDotenv {
  test: string;
}

export const convict = loadedConvict as IConvict;
export const dotenv = loadedDotenv as IDotenv;
