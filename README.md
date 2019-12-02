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
$ yarn start # Run index.mjs
```

## Usage

Code found in `index.mjs` aswell.

```javascript
// Import as early as possible.
import dotenv from 'dotenv';
dotenv.config();

// Import desired functions
import {
  getAccountDetails,
  getAccountNumberDetails,
  getAccountTransactions
} from './Api.mjs';

const main = async () => {
  try {
    const details = await getAccountDetails();
    console.log('Retrieved details:\n', details);

    const numberDetails = await getAccountNumberDetails('YourAccountId');
    console.log('Retrieved number details:\n', numberDetails);

    const transactions = await getAccountTransactions('YourAccountId');
    console.log('Retrieved transactions:\n', transactions);
  } catch (error) {
    console.log(error);
  }
};

main();
```
