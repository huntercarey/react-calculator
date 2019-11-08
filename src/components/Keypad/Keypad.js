import React, { Component } from 'react';
import './Keypad.css';
import KeypadRow from '../KeypadRow/KeypadRow'
import Button from '../Button/Button';

class Keypad extends Component {
    render() {
        return (
            <div className='Keypad'>
                {/* ROW 1 */}
                <KeypadRow>
                    <Button type='primary' onButtonPress={this.props.onButtonPress}>C</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='primary'>&larr;</Button>
                    <Button onButtonPress={this.props.onButtonPress}  type='operator'>%</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>/</Button>
                </KeypadRow>

                {/* ROW 2 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='primary'>7</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='primary'>8</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='primary'>9</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>*</Button>
                </KeypadRow>

                {/* ROW 3 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='primary'>4</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='primary'>5</Button>
                    <Button  onButtonPress={this.props.onButtonPress}type='primary'>6</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>-</Button>
                </KeypadRow>

                {/* ROW 4 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='primary'>1</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='primary'>2</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='primary'>3</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>+</Button>
                </KeypadRow>

                {/* ROW 5 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='primary'>0</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='primary'>.</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='large'>=</Button>

                </KeypadRow>
            </div>
        );
    }
}

export default Keypad;