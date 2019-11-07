import React, {Component} from 'react';
import './Screen.css';
import ResultsScreen from '../ResultsScreen/ResultsScreen';

// Component that holds the result screen and calculation screen
class Screen extends Component {
    render() {
        return(
            <div className='Screen'>
                <ResultsScreen>0</ResultsScreen>
            </div>
        );
    }
}

export default Screen;