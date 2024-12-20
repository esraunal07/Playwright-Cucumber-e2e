# Playwright-Cucumber-e2e-test-example

Overview

We tested the game Espresso Addict using Playwright and Cucumber/BDD. The focus was on implementing end-to-end tests, automating processes, and integrating with GitHub Actions for CI.

Objectives

Set up Playwright with Cucumber for BDD-style testing.
Implement tests to verify:
The player can win in two distinct ways.
Repeatedly choosing "wait" leads to a loss (pre-written tests, refactored if needed).
Navigation to and from the help page works as expected.
Write reusable step definitions for maintainable tests.
Minimize CSS/XPath locators by following Playwright best practices

How to Run

Install dependencies:     npm install  
Start the game:           npm start  
Run all tests:            npm test  

Run tests in specific browsers:

Chromium: npm run test-chromium
Firefox: npm run test-firefox
WebKit: npm run test-webkit

