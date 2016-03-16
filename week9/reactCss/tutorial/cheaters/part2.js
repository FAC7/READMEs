import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            inlineStyle: {
            color: 'blue',
            fontSize: '12em'
        }
    };
}

    render(){

        return(
        <div>
        <h1 style={this.state.inlineStyle}>{this.props.txt}</h1>
        </div>
    )
    }
}

const rootEl = document.getElementById('container');

ReactDOM.render(
    <App txt="something" />,
    rootEl
);

export default App;
