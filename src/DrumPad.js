import React from 'react';
import './App.css';

class DrumPad extends React.Component {
    constructor(props){
        super(props)
        this.state={
        	backgroundBtn: '',
        	boxShadowBtn: '',
        	outlineBtn: ''
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

	componentDidMount(){
		document.addEventListener('keydown', this.handleKeyPress)
		document.addEventListener('keyup', this.handleKeyUp)
	}

    componentWillUnmount(){
    	document.removeEventListener('keydown', this.handleKeyPress)
    	document.removeEventListener('keyup', this.handleKeyUp)
    }

	handleKeyPress(event){
		if(event.keyCode === this.props.keyCode){
			this.audio.play()
			this.audio.currentTime = 0
			this.props.handleDisplay(this.props.id)
			this.setState({
				backgroundBtn: '#E06D48',
				boxShadowBtn: 'inset 3px 3px 2px #BD5E3E',
				outlineBtn: 'none'
			})
		}
	}

	handleKeyUp(event){
		this.setState({
			backgroundBtn: '',
			boxShadowBtn: '',
			outlineBtn: ''
		})
	}

	handleClick(){
		this.audio.play()
		this.audio.currentTime = 0
		this.props.handleDisplay(this.props.id)
	}

    render(){
        return (
			<div 
				className="drum-pad" 
				id={this.props.id} 
				onClick={this.handleClick}
				style={{backgroundColor: this.state.backgroundBtn, boxShadow: this.state.boxShadowBtn, outlineBtn: this.state.outlineBtn }}
			>
				<p>{this.props.keyTrigger}</p>
				<audio
					ref={ref => this.audio = ref}
					className="clip" 
					src={this.props.url} 
					id={this.props.keyTrigger}>
				</audio>
			</div>
        );
    }
}

export default DrumPad;
