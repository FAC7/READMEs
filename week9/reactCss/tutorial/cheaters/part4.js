import React from 'react';
import ReactDOM from 'react-dom';
require('./styles.css');


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
        setTimeout(()=> {
            this.setState({
                inlineStyle: {
                color: 'red',
                fontSize: '8em'
            }
            });
        }, 3000);
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
