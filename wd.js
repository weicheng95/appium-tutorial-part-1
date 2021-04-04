const wdio = require("webdriverio");
const { AndroidConfig } = require("./config/android.local.config");

const main = async () => {
  const client = await wdio.remote(AndroidConfig);

  await client.deleteSession(); // must call deleteSession to end the session.
};

(async() => {
  await main();
})();
