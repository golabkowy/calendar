import React from 'react';
import {Button} from "react-bootstrap";
import {axios} from 'axios';

class PostButton extends React.Component {

    constructor(props) {
        super(props);
        this.doPost = this.doPost.bind(this);
    }

    doPost(data) {
        axios.post('http://localhost:3030/', data)
            .then((response) => {
                console.log("POST request succeed " + response);
            }).catch((error) => {
            console.log("POST request error " + error)
        });
    }

    render() {
        return <Button onClick={this.props.onClick || this.doPost}>
            {
                this.props.buttonText || "defaultPostButtonText"
            }
        </Button>
    }
}

export default PostButton;
