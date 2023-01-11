import { emitirTextEditor } from "./socket-front-documento.js";


const textEditor = document.getElementById('editor-texto');

textEditor.addEventListener('keyup', () => {
    emitirTextEditor(textEditor.value);
});

function atualizaTextoEditor(texto) {
    textEditor.value = texto;
}

export { atualizaTextoEditor };