const lotion = require('lotion');
const coins = require('coins');
const privKey = Buffer.from("91815669613c9fa8e7a5816e5155e19aa0316de836c5b880c6b668aff9448026", "hex");

async function wallet() {
  const client = await lotion.connect(process.env.APP_GCI);
  const wallet = coins.wallet(privKey, client);

  // wallet methods:
  const address = wallet.address();
  console.log(address); // 'OGccsuLV2xuoDau1XRc6hc7uO24'

  let balance = await wallet.balance();
  console.log(balance); // 20

  let result = await wallet.send('04oDVBPIYP8h5V1eC1PSc5JU6Vo', 5);
  console.log(result); // { height: 42 }
}
wallet();