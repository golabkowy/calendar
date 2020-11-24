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
        this.setStateClients = this.setStateClients.bind(this);
    }

    setStateClients = (clientBoxess) => {
        console.log("UDALO SIE COS TAM WYWOLAC");
        console.log(clientBoxess);
        //a moze i nawet set state by się przydało :)
        this.state.clientBoxes = new Array(clientBoxess);
        this.setState({clientBoxes:clientBoxess});
    }

    render() {
        return <Container>
            CLIENTS HOLDER
            <ClientsHolderNav setClients={this.setStateClients}></ClientsHolderNav>
            <ClientsHolderClientsSection ></ClientsHolderClientsSection>
            {
                this.state.clientBoxes
            }
        </Container>
    }
}

export default ClientsHolder;
