# Node.js Cron Job Example

This project demonstrates how to use the `node-cron` module to schedule tasks in Node.js. The script schedules a task that runs every minute and logs the current date and time to a file named `cron.log`.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 10 or higher)
- [npm](https://www.npmjs.com/get-npm) (Node package manager)

## Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/PrabathIshanka/node-cron-job-example.git
    cd node-cron-job-example
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

## Usage

1. **Run the script**:

    ```sh
    node app.js
    ```

2. **Check the log file**:

    The script will append the current date and time to `cron.log` every minute. You can open this file to see the log entries.

## File Structure

