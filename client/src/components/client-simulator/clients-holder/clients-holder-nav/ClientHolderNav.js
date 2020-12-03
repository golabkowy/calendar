import React from 'react';
import {Row} from "react-bootstrap";
import PostButton from "../../../buttons/post-button/PostButton";

class ClientsHolderNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clients: [],
        };
    }

    render() {
        return <Row>
            TO BEDZIE CALY NAV DLA CLIENTS HOLDERA
            <PostButton buttonText="Add Client" id={"add-client-button"}></PostButton>
            <PostButton buttonText="Remove Client"></PostButton>
        </Row>
    }
}

export default ClientsHolderNav;
