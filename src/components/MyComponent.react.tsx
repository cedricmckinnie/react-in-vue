import React, {Component} from 'react';
import {Button} from "@material-ui/core";

class MyComponentReact extends Component {
    render() {
        return (
            <Button variant="contained" color="primary">
                This button component is rendered through props
            </Button>
        );
    }
}

export default MyComponentReact;
