import * as loadedConvict from '!val-loader!./convict-loader';

export interface IConvict {
  env: 'production' | 'development' | 'test' | 'local' | 'stage';
  api: string;
}

export const convict = loadedConvict as IConvict;
