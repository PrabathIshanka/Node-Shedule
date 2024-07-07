# Node.js Cron Job Example

This project demonstrates how to use the `node-cron` module to schedule tasks in Node.js. The script schedules a task that runs every minute and logs the current date and time to a file named `cron.log`.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 10 or higher)
- [npm](https://www.npmjs.com/get-npm) (Node package manager)

## Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/PrabathIshanka/node-cron-job-example.git
    ```
    ```sh
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
### index.js
```js
// Select the button element with the class 'btn'
const btn = document.querySelector(".btn");

// Add an event listener for the 'mouseover' event
btn.addEventListener("mouseover", (event) => {
  // Calculate the x and y positions relative to the button's position
  const x = event.pageX - btn.offsetLeft;
  const y = event.pageY - btn.offsetTop;

  // Set the CSS custom properties (--xPos and --yPos) with the calculated positions
  btn.style.setProperty("--xPos", `${x}px`);
  btn.style.setProperty("--yPos", `${y}px`);
});
```
### package-lock.json
```json
{
  "name": "node-shedule",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "node-shedule",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "node-cron": "^3.0.3"
      }
    },
    "node_modules/node-cron": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/node-cron/-/node-cron-3.0.3.tgz",
      "integrity": "sha512-dOal67//nohNgYWb+nWmg5dkFdIwDm8EpeGYMekPMrngV3637lqnX0lbUcCtgibHTz6SEz7DAIjKvKDFYCnO1A==",
      "dependencies": {
        "uuid": "8.3.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/uuid": {
      "version": "8.3.2",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
      "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
      "bin": {
        "uuid": "dist/bin/uuid"
      }
    }
  }
}

```
### package.json
```json
{
  "name": "node-shedule",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "node-shedule",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "node-cron": "^3.0.3"
      }
    },
    "node_modules/node-cron": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/node-cron/-/node-cron-3.0.3.tgz",
      "integrity": "sha512-dOal67//nohNgYWb+nWmg5dkFdIwDm8EpeGYMekPMrngV3637lqnX0lbUcCtgibHTz6SEz7DAIjKvKDFYCnO1A==",
      "dependencies": {
        "uuid": "8.3.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/uuid": {
      "version": "8.3.2",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
      "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
      "bin": {
        "uuid": "dist/bin/uuid"
      }
    }
  }
}

```
