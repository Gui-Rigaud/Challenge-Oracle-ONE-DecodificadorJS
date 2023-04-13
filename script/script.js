const outputDiv = document.querySelector(".outputArea");
const contDef = document.querySelector(".cont1");
var outText = document.getElementById("outText");
var boxText = document.querySelector(".boxText");
boxText.style.display = 'none';

/* outputDiv.removeChild(contDef);
outputDiv.replaceChildren(contDef); */

function encriptMsg() {
    var msg = document.querySelector("textarea").value;
    msg = msg.toLocaleLowerCase().trim();
    if (msg.length > 0) {
        var msgCripto = msg
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/e/g, "enter")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat")
            .replace(/,/g, "");

        if (outputDiv.contains(contDef)) {
            contDef.style.display = 'none';
        }

        boxText.style.display = 'block';
        outText.value = msgCripto.toLocaleLowerCase();
    } else {
        alert("Digite algo para encriptar!");
        return;
    }
}

function decriptMsg() {
    var msg = document.querySelector("textarea").value;
    msg = msg.toLocaleLowerCase().trim();
    if (msg.length > 0) {
        var msgDecript = msg
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u")
            .replace(/ai/g, "a");

        if (outputDiv.contains(contDef)) {
            contDef.style.display = 'none';
        }

        boxText.style.display = 'block';
        outText.value = msgDecript;
    } else {
        alert("Digite algo para decriptar!");
        return;
    }
}

async function copiarTexto() {
    let textoCopiado = document.getElementById("outText");
    textoCopiado.select();
    await navigator.clipboard.writeText(textoCopiado.value);
    alert("Texto copiado com sucesso!");
    boxText.style.display = 'none';
    contDef.style.display = 'block';
}