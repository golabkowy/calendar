import React from 'react';
import './calendar-styles.css'

class CalendarTerm extends React.Component {
    render() {
        return <div id={this.props.info.isReserved ? 'term-reserved' : 'term-free'}>
            Termin {this.props.info.start} {this.props.info.end}
        </div>
    }
}

export default CalendarTerm;
