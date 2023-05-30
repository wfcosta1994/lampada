var lamp = window.document.getElementById("lampada")

function desligar(){
    lamp.src="desligada.svg"
}
function ligar(){
    lamp.src="ligada.svg"
}
lamp.addEventListener("click", quebrar)
function quebrar(){
    lamp.src="quebrada.svg"
}


