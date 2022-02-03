![Cross Browser Testing with Cypress](images/cbt-cypress-banner.png)

# Modern Cross-Browser Testing with Cypress

This repository contains the example code for the
[Modern Cross-Browser Testing with Cypress](http://applitools.info/qjg) workshop
led by [Pandy Knight](https://twitter.com/AutomationPanda)
and hosted by [Applitools](https://applitools.com/).

Full instructions for the workshop are provided in [`WORKSHOP.md`](WORKSHOP.md).


## Abstract

As organizations double down on digital, the concept of quality has evolved from “does it work” to “is it the best experience” – but the race to deliver innovation to market faster than the competition is causing challenges for software teams.

More frequent releases multiplied by an explosion of device/browser combinations and increased application complexity have exponentially increased the number of screens that need to be validated each cycle – an industry average of 81,480 screens to 681,296 for the top 33% – and traditional test automation can’t keep up.

In this 1-hour workshop, “Automation Panda” Andrew Knight will explain how to create ultrafast automated cross-browser tests using JavaScript with Cypress – one of the most popular open-source end-to-end test frameworks – and integrate them into CI/CD to provide feedback on quality across all browser/device combinations in seconds.

Highlights:

* The importance and evolution of cross-browser testing 
* Critical requirements for a scalable cross-browser testing initiative and pros/cons of different approaches 
* How to accelerate cross-browser / cross-device testing for integration into CI/CD using JavaScript with Cypress


## Outline

1. Traditional cross-browser testing
   1. Writing a typical login test
   2. Running the test locally
   3. Running the test against multiple browsers
   4. Scaling out cross-browser testing yourself
   5. Scaling out cross-browser testing as a service
2. Modern cross-browser testing
   1. Reconsidering what should be tested
   2. Introducing Applitools Ultrafast Grid
   3. Rewriting login as a visual test
   4. Running visual tests across multiple browsers
   5. Integrating modern cross-browser testing with CI/CD


## Prerequisites

To complete this workshop, you will need:

1. An Applitools account
   * Register [here](https://auth.applitools.com/users/register) for a free account
2. [Node.js](https://nodejs.org/en/)
   * This project was created with v16.13.1
3. A JavaScript IDE like [Visual Studio Code](https://code.visualstudio.com/docs/languages/javascript)
4. Up-to-date versions of the following browsers:
   * [Google Chrome](https://www.google.com/chrome/)
   * [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
   * [Microsoft Edge](https://www.microsoft.com/en-us/edge)


## Architecture

This project is a small JavaScript test automation project
containing [Cypress](https://www.cypress.io/) test cases
for an [Applitools demo site](https://demo.applitools.com).
Each test case covers the same login behavior, but they do so in different ways:

1. `traditional.spec.js` covers login using traditional assertions on a local machine.
2. `visual.spec.js` covers login using Visual AI with [Applitools Eyes](https://applitools.com/products-eyes/)
   and [Ultrafast Grid](https://applitools.com/product-ultrafast-test-cloud/).


## Running tests

To launch tests,
run `npx cypress open` to launch the Cypress browser window (good for developing),
or run `npx cypress run` to execute tests purely from the command line (good for CI/CD).

Before running the visual test, 
you must set the `APPLITOOLS_API_KEY` OS environment variable to your Applitools API key
so that the test can connect to the Applitools cloud.

There are also two versions of the demo site under test:

1. The *original* version of the site
2. A *changed* version of the site with visual differences

To control which version to test, set the `DEMO_SITE`
[Cypress environment variable](https://docs.cypress.io/guides/guides/environment-variables)
to `original` or `changed`.

This project also provides a number of npm scripts to make launch commands simpler:

* `npm run cypress` - opens the Cypress browser window
* `npm run cypress:original` - opens the Cypress browser window to test the original site
* `npm run cypress:changed` - opens the Cypress browser window to test the changed site
* `npm test` - executes tests from the command line
* `npm run test:original` - executes tests against the original site
* `npm run test:changed` - executes tests against the changed site
* `npm run test:chrome` - executes tests using Google Chrome
* `npm run test:edge` - executes tests using Microsoft Edge
* `npm run test:firefox` - executes tests using Mozilla Firefox

These commands run both the traditional and visual tests.
To run one test, append `-- --spec "<path>"` to the command.
For example, `npm run test:changed -- --spec "cypress/integration/visual.spec.js"`
runs the visual test against the changed site purely from the command line.
