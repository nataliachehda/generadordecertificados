const btnEmpezar = document.getElementById("btnempezar");
const btnDescargar = document.getElementById("btndescargar");
const canvas = document.getElementById("canvas");
let nombre;
drawCertificate();
btnEmpezar.addEventListener("click", function() {
    nombre = prompt("Ingrese su nombre");
    drawCertificate(nombre);
});
function drawCertificate(nombre = "") {
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
const fondo = new Image();
fondo.src = "./images/fondo.jpg";
fondo.onload = function() {
    ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);
    ctx.font = "bold 50px serif";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Reconocimiento", canvas.width / 2, 130);
    ctx.fillText("Por su dedicación y compromiso", canvas.width / 2, 190);
    ctx.fillText("Felicitaciones", canvas.width / 2, 250);
    ctx.fillText(nombre, canvas.width / 2, 330);
};
}
btnDescargar.addEventListener("click", function() {
const link = document.createElement("a");
link.download = "certificado.jpg";
link.href = canvas.toDataURL("image/jpeg");
link.click();
});