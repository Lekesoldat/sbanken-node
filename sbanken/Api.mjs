import { BASE_URL, ACCESS_TOKEN_ENDPOINT } from './constants.mjs';
import fetch from 'node-fetch';
import btoa from 'btoa';

let token = null;

export const getAccessToken = async () => {
  if (!token) {
    console.log('Fetching access token...');

    const authHeader = btoa(
      encodeURIComponent(process.env.CLIENT_ID) +
        ':' +
        encodeURIComponent(process.env.SECRET)
    );

    const res = await fetch(ACCESS_TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${authHeader}`,
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        customerId: process.env.USER_ID
      },
      body: 'grant_type=client_credentials'
    });

    token = await res.json();
  }
  return token.access_token;
};

export const getAccountDetails = async () => {
  console.log('Fetching account details...');
  const res = await fetch(`${BASE_URL}/api/v1/accounts/`, {
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      customerId: process.env.USER_ID
    }
  });
  return await res.json();
};

export const getAccountNumberDetails = async accountId => {
  console.log('Fetching account number details...');

  const res = await fetch(`${BASE_URL}/api/v1/accounts/${accountId}`, {
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      customerId: process.env.USER_ID
    }
  });

  return await res.json();
};

export const getAccountTransactions = async accountId => {
  console.log('Fetching account transactions...');
  const res = await fetch(`${BASE_URL}/api/v1/transactions/${accountId}`, {
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      customerId: process.env.USER_ID
    }
  });

  return await res.json();
};
