import React, {Component} from 'react';
import './Keypad.css';
import KeypadRow from '../KeypadRow/KeypadRow'

class Keypad extends Component {
    render() {
        return(
            <div className='Keypad'>
                {/* ROW 1 */}
                <KeypadRow>
                    
                </KeypadRow>
                {/* ROW 2 */}
                <KeypadRow>
                    
                </KeypadRow>
                {/* ROW 3 */}
                <KeypadRow>
                    
                </KeypadRow>
                {/* ROW 4 */}
                <KeypadRow>
                    
                </KeypadRow>
                {/* ROW 5 */}
                <KeypadRow>
                    
                </KeypadRow>
            </div>
        );
    }
}

export default Keypad;