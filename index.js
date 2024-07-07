// Import the node-cron module for scheduling tasks
const cron = require("node-cron");
// Import the fs (file system) module for file operations
const fs = require("fs");
// Import the path module for handling file paths
const path = require("path");

// Define the path to the log file using the current directory
const logFilePath = path.join(__dirname, "cron.log");

// Schedule a cron job to run every minute
cron.schedule("*/1 * * * *", () => {
  // Get the current date and time
  const now = new Date();
  // Create a log message with the current date and time
  const logMessage = `HI ${now}\n`;

  // Append the log message to the log file
  fs.appendFile(logFilePath, logMessage, (err) => {
    // Check for errors during the file write operation
    if (err) {
      // Log an error message to the console if the file write fails
      console.error("Failed to write to log file", err);
    } else {
      // Log a success message to the console if the file write succeeds
      console.log("Log message written to file");
    }
  });
});
