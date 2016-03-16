import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    render(){
        return (
        <div>
        <h1>{this.props.txt}</h1>
        </div>
        )
    }
}

const rootEl = document.getElementById('container');

ReactDOM.render(
    <App txt="something" />,
    rootEl
);
