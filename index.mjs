import dotenv from 'dotenv';
dotenv.config();

import {
  getAccountDetails,
  getAccountNumberDetails,
  getAccountTransactions
} from './Api.mjs';

const main = async () => {
  try {
    const details = await getAccountDetails();
    console.log('Retrieved details:\n', details);

    const numberDetails = await getAccountNumberDetails('xxx');
    console.log('Retrieved number details:\n', numberDetails);

    const transactions = await getAccountTransactions('xxx');
    console.log('Retrieved transactions:\n', transactions);
  } catch (error) {
    console.log(error);
  }
};

main();
