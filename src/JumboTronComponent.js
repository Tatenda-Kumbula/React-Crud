import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class JumbotronComponent extends Component {

    constructor(props){
        super(props);
    }

render() {
    return (
        <div>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>{this.props.children}</p>
                <p><Button bStyle="primary">Learn more</Button></p>
            </Jumbotron>
        </div>
    );
}

}

export default JumboTronComponent;