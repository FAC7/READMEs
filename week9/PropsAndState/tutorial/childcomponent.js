// import node modules
import React from "react";

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

export default ChildComponent;
