import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import Employee from './component/Employee'
//import './component/Empoyee_style.css'
import Form2 from './eval2/form'

class Temp extends Component{
    render(){
        return(
            <div className="begin">
                {/* <header className ="line1"><h1> ADD NEW EMPLOYEE </h1></header> */}
                {/* <Employee /> */}
                <Form2 />
            </div>
        );
    }
}

ReactDOM.render(<Temp />, document.getElementById('root'));



//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
