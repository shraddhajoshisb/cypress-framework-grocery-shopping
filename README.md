# Cypress E2E Testing Framework

This repository contains a Cypress end-to-end testing framework for automating tests on the ecommerce website. It utilizes the page object model for organizing test code and fixtures for test data.


## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#Environment-Variables)
- [Running Tests](#running-tests)


  ## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm are installed. You can download them from [here](https://nodejs.org/).
- A code editor e.g. VSCode

  ## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/cypress-e2e-framework.git
    cd cypress-e2e-framework
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Environment Variables

Following Environment Vars should be set before running the tests

`CYPRESS_LMS_USER_EMAIL`

`CYPRESS_LMS_USER_PASSWORD`

_Note_: The above are credentials for a normal edX user who does not have access to admin portal

`CYPRESS_ADMIN_USER_EMAIL`

`CYPRESS_ADMIN_USER_PASSWORD`

## Running Tests

To run the tests, you can use the following commands:

- Open Cypress Test Runner:
    ```sh
    npx cypress open
    ```

- Run tests in headless mode:
    ```sh
    npx


