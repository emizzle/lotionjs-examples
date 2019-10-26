## Basic contract example
The application is an example of how a simple smart contract could be created. The `client` creates a very minimal CLI for interacting with the smart contract. The client can be run on as many different clients as needed and the state will be replicated automatically.

### To get started:
1. Run `node chain.js` in one terminal. This will output the app's GCI (a unique app identifier).
  ```
  337e62160bb7ed3c1ea5b7b81acf4da6db8e7de75e9c4aa184a57bf9fe962a68
  ```
1. In another terminal, run 
```
APP_GCI=337e62160bb7ed3c1ea5b7b81acf4da6db8e7de75e9c4aa184a57bf9fe962a68 node client.js
```
replacing the `APP_GCI` environment variable with the GCI output from `app.js`
1. You can run `client.js` with the same GCI on multiple other clients and each client will automagically have a shared state!!