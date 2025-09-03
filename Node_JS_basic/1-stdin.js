#!/usr/bin/node

// Print the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Event listener for user input
process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  // Print the user input
  process.stdout.write(`Your name is: ${input}\n`);
});

// Event listener when the program ends (EOF / Ctrl+D or echo pipe)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
