const coins = require('coins');
const lotion = require('lotion');

const app = lotion({
  initialState: {
    storedData: 100,
    nonce: 0
  }
});

app.use((state, tx) => {
  if (state.nonce !== tx.nonce) return;

  if (state.nonce === tx.nonce) {
    state.nonce++;
  }
  switch (tx.method) {
    case "set":
      state.storedData = tx.value;
      break;
  }
});

app.start().then((app) => {
  console.log(JSON.stringify(app.GCI));
});