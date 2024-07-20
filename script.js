function cambiaMensage() {
    document.getElementById("loading-message").innerText= "enviado!"
}


setTimeout(cambiaMensage,2000)
setTimeout(function() {
alert("Recibiste un abrazo!")
}, 2400)