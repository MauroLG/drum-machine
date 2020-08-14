import React from 'react';
import DrumPad from './DrumPad.js'
import './App.css';

let drumKey = [
        {
            keyTrigger: 'Q',
            keyCode: 81,
            id: 'Heater-1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
        {
            keyTrigger: 'W',
            keyCode: 87,
            id: 'Heater-2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        {
            keyTrigger: 'E',
            keyCode: 69,
            id: 'Heater-3',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        {
            keyTrigger: 'A',
            keyCode: 65,
            id: 'Heater-4',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        },
        {
            keyTrigger: 'S',
            keyCode: 83,
            id: 'Clap',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        {
            keyTrigger: 'D',
            keyCode: 68,
            id: 'Open-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        {
            keyTrigger: 'Z',
            keyCode: 90,
            id: 'Kick-n-Hat',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
        {
            keyTrigger: 'X',
            keyCode: 88,
            id: 'Kick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        {
            keyTrigger: 'C',
            keyCode: 67,
            id: 'Closed-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }
    ];

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            display: '',
        }
        this.handleDisplay = this.handleDisplay.bind(this);
    }
    
    handleDisplay(display){
        this.setState({
            display: display
        })
    }

    render(){
        return (
            <div className="App">
                <div id="drum-machine">
                        <div className="container-pad">
                            {drumKey.map(d => (
                                <DrumPad 
                                    id={d.id}
                                    keyTrigger={d.keyTrigger}
                                    keyCode = {d.keyCode}
                                    url={d.url}
                                    onClick={this.handleClick}
                                    onKeyDown={this.triggerKeyPress}
                                    handleDisplay={this.handleDisplay}
                                />
                            ))}
                        </div>
                        <div id="display">{this.state.display}</div>
                </div>
            </div>
        );
    }
}

export default App;
