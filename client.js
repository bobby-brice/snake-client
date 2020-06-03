const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: "135.23.222.148",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  // const direction = ["Move: up", "Move: up", "Move: up", "Move: up"];
  conn.on('connect', () => {
    conn.write("Name: BOB");
    // let count = 50;
    // for (let dir in direction) {
    //   setTimeout(() => {
    //     conn.write(direction[dir++]);

    //   }, count);
    //   count += 50;
    // }
  });

  return conn;
};

module.exports = { connect };