const socket = io();

const textEditor = document.getElementById('editor-texto');

textEditor.addEventListener('keyup', () => {
    console.log(textEditor.value);
});