const { join } = require('path');
const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = ['./tests/specs/**/app.simpleOrder.spec.js'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        'appium:deviceName': 'Nexus_5_API_27',
        'appium:platformVersion': '8.1',
        'appium:orientation': 'PORTRAIT',
        // `automationName` will be mandatory, see
        // https://github.com/appium/appium/releases/tag/v1.13.0
        'appium:automationName': 'UiAutomator2',
        // The path to the app
        'appium:app': join(
            process.cwd(),
            '../frontend/android/app/build/outputs/apk/debug/app-debug.apk'
        ),
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        'appium:noReset': true,
        'appium:newCommandTimeout': 240
        // browserName: 'chrome'
    }
];

exports.config = config;





"@types/chai": "^4.1.4",
    "@types/cucumber": "^4.0.4",
    "@types/jasmine": "^2.6.0",
    "@types/node": "^10.14.19",
    "@types/webdriverio": "^4.10.2",
    "@wdio/allure-reporter": "^5.18.6",
    "@wdio/cli": "^5.18.6",
    "@wdio/local-runner": "^5.18.0",
    "@wdio/spec-reporter": "^5.16.11",
    "@wdio/sync": "^5.17.0",
    "del-cli": "^3.0.0",
    "wdio-allure-reporter": "^5.0.0-beta.3",
    "allure-commandline": "^2.5.0",
    "appium": "^1.8.1",
    "chai": "^4.1.2",
    "cucumber": "^4.2.1",
    "rimraf": "^2.6.2",
    "ts-node": "^6.1.1",
    "tslint": "^5.10.0",
    "typescript": "^2.9.2",
    "wdio-appium-service": "^0.2.3",
    "wdio-cucumber-framework": "^2.1.0",
    "wdio-spec-reporter": "^0.1.4"
