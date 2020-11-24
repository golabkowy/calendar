import React from 'react';
import {Button} from "react-bootstrap";

class DeleteButton extends React.Component {
    render() {
        return <Button>
            {
                this.props.buttonText || "defaultDeleteButtonText"
            }
        </Button>
    }
}

export default DeleteButton;
