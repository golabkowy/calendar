import React from 'react';
import {Container} from "react-bootstrap";
import ClientsHolderNav from "./clients-holder-nav/ClientHolderNav";
import ClientsHolderClientsSection from "./clients-holder-clients-section/ClientsHolderClientsSection";

class ClientsHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientBoxes: [],
        }
    }

    render() {
        return <Container>
            CLIENTS HOLDER
            <ClientsHolderNav></ClientsHolderNav>
            <ClientsHolderClientsSection></ClientsHolderClientsSection>
        </Container>
    }
}

export default ClientsHolder;
