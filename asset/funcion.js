function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;
    hideElements();
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decryptedText;
    hideElements();
}
function hideElements() {
    document.getElementById('muñeco').style.display = 'none';
    document.getElementById('mensaje1').style.display = 'none';
    document.getElementById('mensaje2').style.display = 'none';
}


