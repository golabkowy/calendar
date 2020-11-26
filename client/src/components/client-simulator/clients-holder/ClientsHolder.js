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
        this.addClient = this.addClient.bind(this);
    }

    addClient = (clientBox) => {
        this.setState({clientBoxes: this.state.clientBoxes.concat(clientBox)});
    }

    render() {
        return <Container>
            CLIENTS HOLDER
            <ClientsHolderNav addClient={this.addClient}></ClientsHolderNav>
            <ClientsHolderClientsSection clientBoxes={this.state.clientBoxes}></ClientsHolderClientsSection>
        </Container>
    }
}

export default ClientsHolder;
