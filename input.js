/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(data) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key));
  return stdin;
};

setupInput();

const handleUserInput = function(key) {
  console.log(key);
  if (key === "\u0003") {
    process.exit();
  }
};

module.exports = { setupInput };