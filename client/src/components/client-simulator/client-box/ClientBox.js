import React from 'react';
import HttpService from "../../buttons/HttpService";
import io from "socket.io-client";


class ClientBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            terms: [], //possible hours of appointment
            days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
            hours: ['8-9', '9-10', '10-11', '11-12', '12-13', '13-14', '14-15', '15-16'],
            formDay: 'monday',
            formHour: '8-9',
            socketData: new Map(),
        }

        this.formHandler = this.formHandler.bind(this);
        this.handleChangeDay = this.handleChangeDay.bind(this);
        this.handleChangeHour = this.handleChangeHour.bind(this);
    }

    componentDidMount() {
        const socket = io('http://localhost:3030'); // it should trigger on server ('connection')

        socket.onopen('connection', () => {
            socket.send('hello connect to client');
        });
        socket.on('message', (arg) => {
            this.setState({socketData: new Map(Object.entries(arg))});
        });
    }

    getTerms() {
    }

    formHandler(event) {
        event.preventDefault();
        (event.target.id === 'book') ?
            HttpService.doPost('book', {day: this.state.formDay, time: this.state.formHour}) :
            HttpService.doPost('cancelBooking', {day: this.state.formDay, time: this.state.formHour});
    }

    handleChangeDay(event) {
        this.setState({formDay: event.target.value});
    }

    handleChangeHour(event) {
        this.setState({formHour: event.target.value});
    }

    render() {
        console.log("RENBDER CLIENT BOXA");
        console.log(this.state.socketData.get('monday'));
        return <div>
            CLIENT BOX
            <form>
                <label>
                    Wybierz dzien:
                    <select value={this.state.formDay} onChange={this.handleChangeDay}>
                        <option label=" "></option>
                        {
                            this.state.days.map((day) => {
                                return <option value={day}> {day}</option>
                            })
                        }
                    </select>

                    <select value={this.state.value} onChange={this.handleChangeHour}>
                        <option label=" "></option>
                        {
                            this.state.hours.map((hour) => {
                                return <option value={hour}> {hour}</option>
                            })
                        }
                    </select>

                </label>
                <label>
                    Godzine:
                </label>

                <input type="submit" id="book" value="Book" onClick={this.formHandler}/>
                <input type="submit" id="cancelBook" value="Cancel booking" onClick={this.formHandler}/>

            </form>
            {/*rezerwuj, odwołaj*/}
        </div>
    }
}

export default ClientBox;
