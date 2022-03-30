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
                <strong>${message.nickname}</strong> Says:
                <p>${message.text}</p>
            </div>
        `;
    })
    .join(" ");

  document.getElementById("messages").innerHTML = html;
}
