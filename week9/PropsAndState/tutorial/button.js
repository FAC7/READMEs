// import node modules
import React from "react";

class Button extends React.Component {
    render () {
        return (
            <button onClick={this.props.onClick}>Click Me!</button>
        )
    }
}
export default Button;
