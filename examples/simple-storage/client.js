const lotion = require('lotion');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function client() {
  if (!process.env.APP_GCI) {
    console.error("You must provide an APP_GCI environment variable to be able to connect to a running node.");
    process.exit();
  }
  const { state, send } = await lotion.connect(process.env.APP_GCI);

  console.log("\nStarting state:");
  console.log(JSON.stringify(await state));

  outputHelp();

  rl.setPrompt("\nSimpleStorage> ");
  rl.prompt();
  rl.on("line", async (input) => {
    switch (input) {
      case "help":
        outputHelp();
        break;
      case "exit":
        rl.close();
        break;
      case "get":
        console.log(`\n${JSON.stringify(await state)}`);
        break;
      default:
        if (input.startsWith("set")) {
          const { nonce } = await state;
          const values = input.match(/set\s(.*)/);
          if (values.length < 2) {
            console.error("Invalid input. Try:\n  set 123");
            break;
          }
          let result = await send({ method: "set", value: values[1], nonce });
          console.log(`\nTx result:\n${JSON.stringify(result)}`);
          console.log(`\nNew state: ${JSON.stringify(await state)}`);
          break;
        }
        else {
          console.error(`Unknown command: '${input}'`);
        }
        break;
    }

    rl.prompt();
  }).on("close", () => {
    process.exit(0);
  });
}

function outputHelp() {
  console.log("\nAvailable options:");
  console.log("  help - outputs this message");
  console.log("  set <value> - sets the value to be stored in SimpleStorage");
  console.log("  get - gets the entire state of the contract");
}
client();