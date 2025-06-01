const id = 'currency';
const name = 'Currency';
const description = 'Currency conversion app that provides real-time exchange rates and conversion functionalities.';
const version = '1.0.0';
const author = 'OpenAI';
const repository = 'https://github.com/OpenAI/currency-converter';


const keywords = ['currency', 'exchange rates', 'conversion', 'finance', 'real-time'];
const dependencies = {
  'axios': '^0.21.1',
  'express': '^4.17.1',
  'dotenv': '^8.2.0'
};
const devDependencies = {
  'nodemon': '^2.0.7',
  'eslint': '^7.14.0'
};
const scripts = {
  'start': 'node server.js',
  'dev': 'nodemon server.js',
  'lint': 'eslint .'
};
const main = 'server.js';
const engines = {
  'node': '>=12.0.0'
};
const config = {
  'port': 3000,
  'apiBaseUrl': 'https://api.exchangerate-api.com/v4/latest/'
};
