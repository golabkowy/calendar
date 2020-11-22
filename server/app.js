const express = require('express');
const app = express();
const port = 3030;
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/book-visit', (req, res) => {
    res.send('Hello World!')
})

// socket connection part
// jaka jest roznica midzy connect a conenection to nie wiem ale dziala i tak i tak
// dla innych natomiaast nie dzieła więc cćoś jest na rrzeczy
//hmm hmm hmm

// czy takie io.on to jest per client i wszystko powinno być w środku?
var interval;
io.on('connect', (socket) => {

    console.log('CLIENT POLACZONY');
    interval = setInterval(() => {
        console.log(`wysylam jakies testowe wiadomosci co czas`);
        socket.emit('test1', "some message test1");
        socket.emit('test2', "some message test1");
        socket.emit('test3', "some message test1");
        console.log("o co kamans2");
    }, 5000);

    socket.on('disconnect', (reason) => {
        console.log(`Client disconnected  ${reason}`);
        clearInterval(interval);
    });


});

// dziala to chyba tak, ze emit('nazwa') , ta nazwa określa endpoint po stronie clienta, on musi
// byc skbrksrbnięty na ten tym message

// app.listen(port, () => {
http.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
