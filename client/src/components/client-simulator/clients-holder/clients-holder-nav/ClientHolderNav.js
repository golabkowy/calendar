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
        this.handleAddClientClick = this.handleAddClientClick.bind(this);
    }

    handleAddClientClick() {
        this.props.addClient(<ClientBox> Zostalem dodany HEqweqweHEH</ClientBox>);
    }

    render() {
        return <Row>
            TO BEDZIE CALY NAV DLA CLIENTS HOLDERA
            <PostButton buttonText="Add Client" onClick={this.handleAddClientClick}></PostButton>
            <PostButton buttonText="Remove Client"></PostButton>
        </Row>
    }
}

export default ClientsHolderNav;
