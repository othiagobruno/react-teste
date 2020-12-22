import { create } from 'apisauce';

const base = {
  production: 'https://api.sandbox.com.br',
  development: 'http://localhost:4010',
};

export const api = create({
  baseURL: process.env === 'production' ? base.production : base.development,
  timeout: 1500,
});
