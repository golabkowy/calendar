import React from 'react';
import {Button} from "react-bootstrap";

class GetButton extends React.Component {
    render() {
        return <Button>
            {
                this.props.buttonText || "defaultGetButtonText"
            }
        </Button>
    }
}

export default GetButton;
