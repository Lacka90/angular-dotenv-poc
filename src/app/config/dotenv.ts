import * as loadedDotenv from '!val-loader!./dotenv-loader';

export interface IDotenv {
  test: string;
}

export const dotenv = loadedDotenv as IDotenv;
