import React from 'react';
import CalendarColumn from "./CalendarColumn";
import {Container, Row} from "react-bootstrap";

class CalendarBox extends React.Component {


    // co to są te props!!!???
    // czym jest this.state,
    // czym jest this.context,


    // ok state to jest stan datego componentu, taki koszyk na variable specyficzne dla danego componentu
    // props to są propertki przekazane z komponentu wyżej, na starcie
    constructor(props) {
        super(props);
        let termsMap = new Map();
        termsMap.set('monday', [10, 13, 15, 18]);
        termsMap.set('tuesday', [10, 13, 15, 18]);
        termsMap.set('wednesday', [10, 13, 15, 18]);
        termsMap.set('thursday', [10, 13, 15, 18]);
        termsMap.set('friday', [10, 13, 15, 18]);
        termsMap.set('saturday', [10, 13, 15, 18]);
        termsMap.set('sunday', [10, 13, 15, 18]);

        this.termsMap = termsMap;
    }

    createColumns() {
        return Array.from(this.termsMap.keys())
            .map(col => (<CalendarColumn columnName={col}
                                         dates={this.termsMap.get(col)}/>));
    }

    render() {
        // var test = new CalendarColumn("szymon");
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
