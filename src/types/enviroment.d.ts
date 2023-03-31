export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string,
      PORT: string,
      ADMIN_TOKEN: string,
      TOKEN_KEY: string,
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}