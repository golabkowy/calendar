import React from 'react';
import CalendarTerm from "./CalendarTerm";
import Col from "react-bootstrap/cjs/Col";

class CalendarColumn extends React.Component {

    constructor(props) {
        super(props);
        // console.log(this.props.dates);
        //this.state.dates = this.props.dates;
    }

    createTermsPerColumn() {
        return this.props.dates.map(date => (<CalendarTerm date={date}/>))
    }

    render() {
        return <Col>
            {this.props.columnName}
            {
                this.createTermsPerColumn()
            }
        </Col>
    }
}

export default CalendarColumn;
