import React from "react";
import ReactDom from 'react-dom';

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
        console.log('toggled');
        this.setState( { clicked: !this.state.clicked } );
    }

    changeChildText(){
        return this.state.clicked ? 'i\'m a good boy':"i'm a naughty naught boy, please spank me!";
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <ChildComponent childText={this.changeChildText()} />
                <Button onClick={this.toggle} />
            </div>
        )
    }
}



class ChildComponent extends React.Component {
    render () {
        return (
            <div>{this.props.childText}</div>
        )
    }
}

ChildComponent.defaultProps = {
    childText: "Ima child yo",
}


class Button extends React.Component {
    render () {
        return (
            <button onClick={this.props.onClick}>Click Me!</button>
        )
    }
}




ReactDom.render(
    <Tutorial />,
    document.getElementById('tutorial')
)
