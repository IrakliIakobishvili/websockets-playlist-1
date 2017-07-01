//connect
const socket = io.connect('http://localhost:3000');

function $(params) {
    return document.getElementById(params)
}

const message = $("message"),
      handle = $('handle'),
      btn = $('send'),
      output = $('output');

btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value,
    })
})

//listen events
socket.on('chat', data => {
    output.innerHTML += `<p><strong>${data.handle}:</strong>${data.message}</p>`
})