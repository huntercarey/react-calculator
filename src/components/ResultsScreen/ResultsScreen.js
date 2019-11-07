import React, {Component} from 'react';
import './ResultsScreen.css';
import ComputationScreen from '../ComputationScreen/ComputationScreen';

class ResultsScreen extends Component {
    render() {
        return(
            <div className='ResultsScreen'>
                {this.props.children}
            </div>
        );
    }
}

export default ResultsScreen;