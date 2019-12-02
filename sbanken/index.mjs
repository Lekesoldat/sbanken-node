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

    const numberDetails = await getAccountNumberDetails(
      '8EF7BDD1A8150D90A5F1D8B7E48BC912'
    );
    console.log('Retrieved number details:\n', numberDetails);

    const transactions = await getAccountTransactions(
      '8EF7BDD1A8150D90A5F1D8B7E48BC912'
    );
    console.log('Retrieved transactions:\n', transactions);
  } catch (error) {
    console.log(error);
  }
};

main();
