import io from './server.js';

io.on('connection', () => {
    console.log('Um cliente se conectou!');
});