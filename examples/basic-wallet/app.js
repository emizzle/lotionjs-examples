/**
 * Your Address:
DgyqJnyZrc9FhHYzB8phfGnTDyzdh7XQS

Your wallet seed is stored at "~/.coins",
make sure to keep it secret!
 */

const lotion = require('lotion');
const coins = require('coins');


const app = lotion({
  // lotion options
  devMode: true
});

app.use(coins({
  // coins options
  name: 'embarkcoin',
  initialBalances: {
    "DgyqJnyZrc9FhHYzB8phfGnTDyzdh7XQS": 21000000,
  }
}));

app.start().then((app) => {
  console.log(app.GCI));
});