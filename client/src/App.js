import './App.css';
import Menu from './components/Menu';
import CalendarBox from "./components/calendar/CalendarBox";
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import io from 'socket.io-client';
import ClientsHolder from "./components/client-simulator/clients-holder/ClientsHolder";

function App() {

    // const socket = io('http://localhost:3030'); // it should trigger on server ('connection')
    // socket.onopen('connection', () => {
    //     socket.send('hello connectied to client');
    // });
    // socket.on('message', (arg) => {
    //     console.log("In message handler");
    //     console.log(arg);
    // });
    //
    // socket.onAny((msg) => {
    //     console.log(msg);
    //     console.log("Any message handler");
    // });

    return (
        <div className="App">
            <Menu>asd</Menu>
            <CalendarBox>asd</CalendarBox>
            <ClientsHolder>Client Holder</ClientsHolder>
        </div>

    );
}

export default App;
