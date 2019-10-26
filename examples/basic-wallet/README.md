## Basic wallet example
An example of an application chain that creates a coin with balances using `coin` middleware for LotionJS. The wallet allows transfer of coin value between addresses.

### To get started:
1. If you don't already have a wallet, run `npx coins` to get a wallet address. This will write a PK to ~/.coins
2. Update your address in `app.js` under `initialBalances`.
1. Run `node app.js` in one terminal. This will output the app's GCI (a unique app identifier).
  ```
  337e62160bb7ed3c1ea5b7b81acf4da6db8e7de75e9c4aa184a57bf9fe962a68
  ```
1. In another terminal, run 
```
APP_GCI=337e62160bb7ed3c1ea5b7b81acf4da6db8e7de75e9c4aa184a57bf9fe962a68 node wallet.js
```
replacing the `APP_GCI` environment variable with the GCI output from `app.js`