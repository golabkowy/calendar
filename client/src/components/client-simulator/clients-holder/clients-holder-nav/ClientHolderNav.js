import React from 'react';
import {Row} from "react-bootstrap";
import PostButton from "../../../buttons/post-button/PostButton";
import ClientBox from "../../client-box/ClientBox";

class ClientsHolderNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clients: [],
        };
        console.log(this.state);
        // it is required to bind function if you want tu use it as in render() function
        this.handleAddClientClick = this.handleAddClientClick.bind(this);
    }

    handleAddClientClick() {
        console.log("click modafkuka");
        this.state.clients.push(<ClientBox> Zostalem dodany HEqweqweHEH</ClientBox>);
        let newState = new Array(this.state.clients);
        this.setState({clients: newState})
        this.props.setClients(this.state.clients);
    }

    render() {
        return <Row>
            TO BEDZIE CALY NAV DLA CLIENTS HOLDERA
            {/*chyba zeby się dało nie pisać inline funkcji tylko sobie dacthis.handleAddClient, to trzeba zrobić bindowanie w konstruktorze*/}
            <PostButton buttonText="Add Client" onClick={this.handleAddClientClick}></PostButton>
            <PostButton buttonText="Remove Client"></PostButton>
            {/*{*/}
            {/*    this.state.clients*/}
            {/*}*/}
        </Row>
    }
}

export default ClientsHolderNav;
