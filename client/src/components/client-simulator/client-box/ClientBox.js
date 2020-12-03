import React from 'react';
import HttpService from "../../buttons/HttpService";


class ClientBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            terms: [], //possible hours of appointment
            wsData: this.props.socketData,
            formDay: 'monday',
            formHour: '8-9',
            socketData: new Map(),
        }
        this.formHandler = this.formHandler.bind(this);
        this.handleChangeDay = this.handleChangeDay.bind(this);
        this.handleChangeHour = this.handleChangeHour.bind(this);
    }

    formHandler(event) {
        event.preventDefault();
        (event.target.id === 'book') ?
            (() => {
                console.log("BOOK");
                this.state.wsData.get(this.state.formDay).find((e) => e.start == this.state.formHour).isReserved = true;
                HttpService.doPost('book', {day: this.state.formDay, time: this.state.formHour})
            })() : (() => {
                console.log("NIEBOOK");
                this.state.wsData.get(this.state.formDay).find((e) => e.start == this.state.formHour).isReserved = false;
                HttpService.doPost('cancelBooking', {day: this.state.formDay, time: this.state.formHour});
            })()

    }

    handleChangeDay(event) {
        this.setState({formDay: event.target.value});
    }

    handleChangeHour(event) {
        this.setState({formHour: event.target.value});
    }

    //dorobić rerender po kliknięciu posta
    render() {
        console.log("RENBDER CLIENT BOXA");
        console.log(this.props.socketData);
        return <div>
            CLIENT BOX
            <form>
                <label>
                    Wybierz dzien:
                    <select value={this.state.formDay} onChange={this.handleChangeDay}>
                        <option label=" "></option>
                        {
                            Array.from(this.state.wsData.keys())
                                .map((day) => {
                                    return <option value={day}> {day}</option>
                                })
                        }
                    </select>

                    <select value={this.state.formHour} onChange={this.handleChangeHour}>
                        <option label=" "></option>
                        {
                            this.state.wsData.get(this.state.formDay).map((hour) => {
                                if (!hour.isReserved) {
                                    return <option value={hour.start}> {hour.start}</option>
                                }

                            })
                        }
                    </select>

                </label>
                <label>
                    Godzine:
                </label>
                {/*zrobic z tego input buttony*/}
                <input type="submit" id="book" value="Book" onClick={this.formHandler}/>
                <input type="submit" id="cancelBook" value="Cancel booking" onClick={this.formHandler}/>

            </form>
        </div>
    }
}

export default ClientBox;
