import React from 'react';
import {Row} from "react-bootstrap";
import io from "socket.io-client";
import ClientBox from "../../client-box/ClientBox";

class ClientsHolderClientsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientBoxes: [],
            socketData: new Map()
        };
        this.addClientBox = this.addClientBox.bind(this);
    }

    componentDidMount() {
        const socket = io('http://localhost:3030'); // it should trigger on server ('connection')

        socket.onopen('connection', () => {
            socket.send('hello connect to client');
        });
        socket.on('message', (data) => {
            this.setState({socketData: new Map(Object.entries(data))});
            console.log("WS MESSAGE");
            console.log(this.state.socketData);
        });

        document.getElementById("add-client-button").addEventListener("click", this.addClientBox)
    }

    addClientBox() {
        const temp = this.state.clientBoxes.concat(<ClientBox socketData={this.state.socketData}></ClientBox>)
        this.setState({clientBoxes: temp});
    }

    render() {
        return <Row>
            CLIENTS HOLDER CLIENTS SECTION
            {
                this.state.clientBoxes
            }

        </Row>
    }
}

export default ClientsHolderClientsSection;
