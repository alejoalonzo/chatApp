var socket = io.connect("http://192.168.0.11:6677", { foceNew: true });

socket.on("messages", function (data) {
  console.log(data);
  render(data);
});

function render(data) {
  var html = data
    .map(function (message, index) {
      return `
            <div class="message">
                <strong>${message.nickname}</strong>:
                <p>${message.text}</p>
            </div>
        `;
    })
    .join(" ");

  var divMessagess = document.getElementById("messages");
  divMessagess.innerHTML = html;
  divMessagess.scrollTop = divMessagess.scrollHeight;
}

function addMessage(e) {
  var message = {
    nickname: document.getElementById("nickname").value,
    text: document.getElementById("text").value,
  };
  document.getElementById("nickname").style.display = "none";
  socket.emit("add-message", message);
  return false;
}
