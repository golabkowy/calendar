import React from 'react';
import {Button} from "react-bootstrap";

class PutButton extends React.Component {
    render() {
        return <Button>
            {
                this.props.buttonText || "defaultPutButtonText"
            }
        </Button>
    }
}

//default exoprt może byc tylko jeden na moduł
export default PutButton;
