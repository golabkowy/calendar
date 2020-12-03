import React from 'react';
import CalendarTerm from "./CalendarTerm";
import Col from "react-bootstrap/cjs/Col";

import './calendar-styles.css'

class CalendarColumn extends React.Component {

    constructor(props) {
        super(props);
    }

    createTermsPerColumn() {
        return this.props.appointments.map(appointment => (<CalendarTerm info={appointment}/>))
    }

    render() {
        return <Col>
            {this.props.columnName}
            {
                this.createTermsPerColumn()
            }
        </Col>
        return null;
    }
}

export default CalendarColumn;
