import React from 'react';
import CalendarColumn from "./CalendarColumn";
import {Container, Row} from "react-bootstrap";
import HttpService from "../buttons/HttpService";

class CalendarBox extends React.Component {


    // co to są te props!!!???
    // czym jest this.state,
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
        console.log("UPDATE");
        HttpService.doGetPromise('getInitialState')
            .then((response) => {
                this.setState({termsMap: new Map(Object.entries(response.data))});
            });
    }

    createColumns() {
        console.log("CREATE COLUMNS METHOD BOX");
        console.log(this.state.termsMap);
        return Array.from(this.state.termsMap.keys())
            .map(col => (<CalendarColumn columnName={col}
                                         appointments={this.state.termsMap.get(col)}/>));
    }

    render() {
        console.log("RENDER METHOD BOX");
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
