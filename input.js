/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key, connection));
  return stdin;
};

setupInput();

const handleUserInput = function(key, conn) {
  console.log(key);
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "\u0077") {
    conn.write("Move: up");
  }
  if (key === "\u0073") {
    conn.write("Move: down");
  }
  if (key === "\u0061") {
    conn.write("Move: left");
  }
  if (key === "\u0064") {
    conn.write("Move: right");
  }
  if (key === "\u0020") {
    conn.write("Say: AHHHHH");
  }
  if (key === "\u0066") {
    conn.write("Say: HANGGRYYY");
  }
};

module.exports = { setupInput };