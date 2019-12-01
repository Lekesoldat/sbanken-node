import { BASE_URL, ACCESS_TOKEN_ENDPOINT } from './constants.mjs';
import fetch from 'node-fetch';
import btoa from 'btoa';

export const getAccessToken = async () => {
  const authHeader = btoa(
    encodeURIComponent(process.env.CLIENT_ID) +
      ':' +
      encodeURIComponent(process.env.SECRET)
  );
  console.log(authHeader);

  const response = await fetch(ACCESS_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${authHeader}`,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      customerId: process.env.USER_ID
    },
    body: 'grant_type=client_credentials'
  })
    .then(res => res.json())
    .then(data => {
      console.log('Access Token Data: ', data);
      return data;
    })
    .catch(err => console.log('Error: ', err));

  return response;
};

export const getAccountDetails = async accesToken => {
  return await fetch(`${BASE_URL}/api/v1/accounts/`, {
    headers: {
      Authorization: `Bearer ${accesToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      customerId: process.env.USER_ID
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log('Account Details: ', data);
      return data;
    })
    .catch(err => console.log('Error: ', err));
};

export const getAccountNumberDetails = async (accountId, accesToken) => {
  return await fetch(`${BASE_URL}/api/v1/accounts/${accountId}`, {
    headers: {
      Authorization: `Bearer ${accesToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      customerId: process.env.USER_ID
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log('Account Number Details: ', data);
      return data;
    })
    .catch(err => console.log('Error: ', err));
};

export const getAccountTransactions = async (accountId, accesToken) => {
  return await fetch(`${BASE_URL}/api/v1/transactions/${accountId}`, {
    headers: {
      Authorization: `Bearer ${accesToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      customerId: process.env.USER_ID
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log('Account Number Details: ', data);
      return data;
    })
    .catch(err => console.log('Error: ', err));
};
