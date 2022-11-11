var peer;
var curConn;

var messageReceived = document.getElementById("msg-received");
var connectionStatus = document.getElementById("conn-status");

function createPeer(id) {
  peer = new Peer(id);

  peer.on("open", function () {
    connectionStatus.innerHTML = "Waiting for connections...";
  });

  peer.on("connection", function (conn) {
    curConn = conn;
    connectionStatus.innerHTML = "Connected";
    conn.on("data", function (data) {
      messageReceived.innerHTML = data;
    });
  });
}

function sendMessage(message) {
  curConn.send(message);
}
