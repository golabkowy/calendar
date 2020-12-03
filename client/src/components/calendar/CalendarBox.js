import React from 'react';
import CalendarColumn from "./CalendarColumn";
import {Container, Row} from "react-bootstrap";
import HttpService from "../buttons/HttpService";

import './calendar-styles.css'
import io from "socket.io-client";

class CalendarBox extends React.Component {

    // czym jest this.context,
    // ok state to jest stan datego componentu, taki koszyk na variable specyficzne dla danego componentu
    // props to są propertki przekazane z komponentu wyżej, na starcie
    constructor(props) {
        super(props);
        this.state = {
            termsMap: new Map()
        }
    }

    componentDidMount() {
        HttpService.doGetPromise('getInitialState')
            .then((response) => {
                this.setState({termsMap: new Map(Object.entries(response.data))});
            });

        const socket = io('http://localhost:3030'); // it should trigger on server ('connection')

        socket.onopen('connection', () => {
            socket.send('hello connect to client');
        });
        socket.on('message', (arg) => {
            this.setState({termsMap: new Map(Object.entries(arg))});
        });
    }

    createColumns() {
        return Array.from(this.state.termsMap.keys())
            .map(col => (<CalendarColumn columnName={col}
                                         appointments={this.state.termsMap.get(col)}/>));
    }

    render() {
        return <Container>
            CALENDAR BOX
            <Row>
                {
                    this.createColumns()
                }
            </Row>
        </Container>
    }
}

export default CalendarBox;
