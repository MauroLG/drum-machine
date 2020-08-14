import React from 'react';
import './App.css';

class DrumPad extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
			<div className="drum-pad" id={this.props.id}>
				<p>{this.props.keyTrigger}</p>
				<audio src={this.props.url} id={this.props.keyTrigger}></audio>
			</div>
        );
    }
}

export default DrumPad;
