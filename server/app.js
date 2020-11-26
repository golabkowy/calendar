const express = require('express');
const app = express();
const port = 3030;
const http = require('http').createServer(app);

//event driven heh
const events = require('events');


// express middleware, check express site for more details
const cors = require('cors');
const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;

//bind socet io to the existing http server
const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

class Appointment {
    constructor(start, end, isReserved) {
        this.start = start;
        this.end = end;
        this.isReserved = isReserved;
    }
}

const calendarState = new Map();
calendarState.set('monday', [new Appointment(8, 9, false), new Appointment(9, 10, false), new Appointment(10, 11, false), new Appointment(11, 12, false), new Appointment(12, 13, false), new Appointment(13, 14, false), new Appointment(14, 15, false), new Appointment(15, 16, false)]);
calendarState.set('tuesday', [new Appointment(8, 9, false), new Appointment(9, 10, false), new Appointment(10, 11, false), new Appointment(11, 12, false), new Appointment(12, 13, false), new Appointment(13, 14, false), new Appointment(14, 15, false), new Appointment(15, 16, false)]);
calendarState.set('wednesday', [new Appointment(8, 9, false), new Appointment(9, 10, false), new Appointment(10, 11, false), new Appointment(11, 12, false), new Appointment(12, 13, false), new Appointment(13, 14, false), new Appointment(14, 15, false), new Appointment(15, 16, false)]);
calendarState.set('thursday', [new Appointment(8, 9, false), new Appointment(9, 10, false), new Appointment(10, 11, false), new Appointment(11, 12, false), new Appointment(12, 13, false), new Appointment(13, 14, false), new Appointment(14, 15, false), new Appointment(15, 16, false)]);
calendarState.set('friday', [new Appointment(8, 9, false), new Appointment(9, 10, false), new Appointment(10, 11, false), new Appointment(11, 12, false), new Appointment(12, 13, false), new Appointment(13, 14, false), new Appointment(14, 15, false), new Appointment(15, 16, false)]);
calendarState.set('saturday', [new Appointment(8, 9, false), new Appointment(9, 10, false), new Appointment(10, 11, false), new Appointment(11, 12, false), new Appointment(12, 13, false), new Appointment(13, 14, false), new Appointment(14, 15, false), new Appointment(15, 16, false)]);
calendarState.set('sunday', [new Appointment(8, 9, false), new Appointment(9, 10, false), new Appointment(10, 11, false), new Appointment(11, 12, false), new Appointment(12, 13, false), new Appointment(13, 14, false), new Appointment(14, 15, false), new Appointment(15, 16, false)]);

const book = (day, time) => {
    const start = parseInt(time.charAt(0));
    calendarState.get(day).find(appointment => appointment.start === start).isReserved = true;
};

const cancelBooking = (day, time) => {
    const start = parseInt(time.charAt(0));
    calendarState.get(day).find(appointment => appointment.start === start).isReserved = false;
};

//ok robimy sobie w takim razie event drivent development
// do tego służą EventEmmitery chyb ten stuff jest wbudowany w Node
// a nie jednak potrzebujemy events z node

// const eventEmmiter = new events.EventEmitter();
// eventEmmiter.on('eventName', 'eventHandler');
//
// const eventHandler = () => {
//   console.log("zlapany event");
// };

//################################ koniec tego event driven

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser().json({type:'application/*+json'}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');    // hohohoh tak chyba można wysłac static reacta :) i problem portu oraz cors będzie rozwiązany ;)
})

app.get('/getInitialState', (req, res) => {
    res.json(Object.fromEntries(calendarState));
});

app.post('/book', (req, res) => {
    console.log(req.body);
    book(req.body.day, req.body.time)
    res.send({resp: 'Booked'})
    // const clients_connected = io.sockets()
    const x = io.of("/");
    console.log(x);
})

app.post('/cancelBooking', (req, res) => {
    console.log(req.body);
    cancelBooking(req.body.day, req.body.time);
    res.send({resp: 'Booking canceled'});
});

//##################
MongoClient.connect('mongodb://localhost:27017/calendar', (error, client) => {
    if (error) throw error

    let db = client.db('calendar')

    db.collection('mammals').find().toArray(function (err, result) {
        if (err) throw err

        console.log(result)
    })
});
//###################
// socket connection part

//hmm hmm hmm

// czy takie io.on to jest per client i wszystko powinno być w środku?
var interval;
io.on('connect', (socket) => {
    //tych logów jest tyle rpzez to chyba ze są te requesty od switching protocola i to juz na warstwie WSz
    console.log('CLIENT POLACZONY' + socket.id);
    // interval = setInterval(() => {
    // console.log(`wysylam jakies testowe wiadomosci co czas`);
    socket.emit('message', Object.fromEntries(calendarState));
    // socket.emit('test2', "some message test1");
    // socket.emit('test3', "some message test1");
    // }, 5000);

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
