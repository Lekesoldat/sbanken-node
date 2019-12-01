# sbanken-node

A package for communicating with the Sbanken API.

## Setup

Make sure to create a `.env` file at the root of the cloned repository. It should have the following fields:

<pre>
USER_ID=
CLIENT_ID=
SECRET=
</pre>

## Running the project

```zsh
$ yarn install # Install dependencies
$ node . # Run index.mjs
```

## Usage

```javascript
// Import as early as possible
import dotenv from 'dotenv';
dotenv.config();

// Make use of the following functionalities
import {
  getAccessToken,
  getAccountDetails,
  getAccountNumberDetails,
  getAccountTransactions
} from './Api.mjs';
```
