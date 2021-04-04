const { join } = require("path");

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
const config = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    // The defaults you need to have in your config
    automationName: "UiAutomator2",
    deviceName: "Pixel-3", // device name from AVD
    platformName: "Android",
    platformVersion: "11.0",
    app: join(process.cwd(), "./apps/ApiDemos-debug.apk"), // The path to the app
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    // newCommandTimeout: 240,
    // Always default the language to a language you prefer so you know the app language is always as expected
    noReset: false,
    language: "en",
    locale: "en",
    permissions: [],
    autoGrantPermissions: true,
    newCommandTimeout: 300,
  },
  sync: true,
};

exports.AndroidConfig = config;