import React from 'react';
import {Row} from "react-bootstrap";

class ClientsHolderClientsSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Row>
            CLIENTS HOLDER CLIENTS SECTION
            {
                this.props.clientBoxes
            }
        </Row>
    }
}

export default ClientsHolderClientsSection;
