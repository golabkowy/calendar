import React from 'react';
import HttpService from "../../buttons/HttpService";

class ClientBox extends React.Component {
    //tutaj w sumie można użyć tych livecyclów ;)
    // albo lączymy automatycznie albo w sumie można dać takie lącznie po koliknięciu czyli z formularza


    constructor(props) {
        super(props);
        //fajnie by byli to czytać może z jakiś propskow>?
        this.state = {
            // socket: io('http://localhost:3030'),
            terms: [], //possible hours of appointment
            days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
            hours: ['8-9', '9-10', '10-11', '11-12', '12-13', '13-14', '14-15', '15-16'],
            formDay: 'monday',
            formHour: '8-9'
        }

        //co tobi ta wspaniala funkcja bind()???
        this.formHandler = this.formHandler.bind(this);
        this.handleChangeDay = this.handleChangeDay.bind(this);
        this.handleChangeHour = this.handleChangeHour.bind(this);
        //update forumlarza w zaleznosci od tego co dostanie z serverka, dostanie tak naprawwde zmianki :)
    }

    // podobno dobrze jest uzupelniać dane na componendDidMount bo możliwa jest modyfikacja stanu jeszcze czy coś w tym stylu

    getTerms() {

    }

    formHandler(event) {
        event.preventDefault();
        (event.target.id === 'book') ?
            HttpService.doPost('book', {day: this.state.formDay, time: this.state.formHour}) :
            HttpService.doPost('cancelBooking', {day: this.state.formDay, time: this.state.formHour});
    }

    handleChangeDay(event) {
        console.log("CVHANGE VALUE DAY");
        console.log(event.target.value);
        this.setState({formDay: event.target.value});
    }

    handleChangeHour(event) {
        console.log("CVHANGE VALUE HOUR");
        console.log(event.target.value);
        this.setState({formHour: event.target.value});
    }

    render() {
        return <div>
            CLIENT BOX
            socket status
            formularz
            {/*<form onSubmit={this.handleSubmit}>*/}
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
