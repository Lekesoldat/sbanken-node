import dotenv from 'dotenv';
dotenv.config();

import {
  getAccessToken,
  getAccountDetails,
  getAccountNumberDetails,
  getAccountTransactions
} from './Api.mjs';

getAccountDetails(process.env.ACCESS_TOKEN);

getAccountNumberDetails('Your Account Number', process.env.ACCESS_TOKEN);

getAccountTransactions('Your Account Number', process.env.ACCESS_TOKEN);
