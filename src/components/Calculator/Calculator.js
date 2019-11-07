import React, {Component} from 'react';
import './Calculator.css'
import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';

// Main Calculator component. Contains our other Calculator components.
class Calculator extends Component {
    render() {
        return(
            <div className='Calculator'>
                <Screen />
                <Keypad />
            </div>
        );
    }
}

export default Calculator;