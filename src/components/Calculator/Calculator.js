import React, {Component} from 'react';
import './Calculator.css'
import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';

// Main Calculator component. Contains our other Calculator components.
class Calculator extends Component {

    // Set up a constructor function to set our initial state
    constructor(props) {
        super(props);

        this.state = {
            equation: '2*5',
            result: 0
        }
    }

    //Function called when any of the keypad buttons are pressed
    onButtonPress = (event) => {
        console.log('onButtonPress called');
    }


    render() {
        return(
            <div className='Calculator'>
                <Screen equation={this.state.equation} result={this.state.result}/>

                {/* Passing the function itself as a prop instead of running the function */}
                <Keypad onButtonPress={this.onButtonPress}/>
            </div>
        );
    }
}

export default Calculator;