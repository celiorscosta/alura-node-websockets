const socket = io();

const textEditor = document.getElementById('editor-texto');

textEditor.addEventListener('keyup', () => {
    console.log(textEditor.value);
});

socket.on('texto_editor_clientes', (texto) => {
    textEditor.value = texto;
});