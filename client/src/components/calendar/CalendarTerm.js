import React from 'react';

class CalendarTerm extends React.Component {
    render() {
        return <div> termin {this.props.info.start} {this.props.info.end} </div>
    }
}

export default CalendarTerm;
