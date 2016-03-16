// import node modules
import React from "react";
import ReactDom from 'react-dom';
// import components
import Button from './button.js';
import ChildComponent from './childcomponent.js';

class Tutorial extends React.Component {
    constructor () {
        super();
        this.state = {
            clicked: false
        }
        this.toggle = this.toggle.bind(this);
        this.changeChildText = this.changeChildText.bind(this);
    }
    toggle () {
        this.setState( { clicked: !this.state.clicked } );
    }
    changeChildText(){
        return this.state.clicked ? 'i\'m a good child':"i'm a naughty child!";
    }
    render() {
        return (
            <div>
                <ChildComponent childText={this.changeChildText()} />
                <Button onClick={this.toggle} />
            </div>
        )
    }
}

ReactDom.render(
    <Tutorial />,
    document.getElementById('tutorial')
)
