import React from "react";
import './fretboard.css';

// This component is each fret that makes up the fretboard on the results page. Each fret plays the sound of a note on click (div)
export default class Fret extends React.Component {
  constructor(props) {
    super(props);
    this.note = React.createRef();
    this.state = {
      playing: false,
    };
  }
  play() {
    if (!this.state.playing) {
      this.setState({ playing: true });
      this.note.play();
    } else {
      this.note.pause();
      this.note.currentTime = 0;
      this.note.play();
    }
  }
  

  hasFinger() { //this is to check if a note is displayed on the fingering chart as a note of a chord
    const note = this.props.notes.find(note => {
      return note.string == this.props.string && note.fret == this.props.fret;
    })
    
    if (note) {
      return <div className="selected-finger">{note.finger}</div>;
    }
  
    else {
      return "";
    }
  };



  render() {
    const className = `note ${this.props.name} ${
      this.state.playing ? "playing" : ""
    }`;
    return (
      <div className={className} onClick={() => this.play()}>
        <audio
          src={this.props.eachNote}
          ref={(input) => {
            this.note = input;
          }}
          onEnded={() => this.setState({ playing: false })}
        ></audio>
        {this.hasFinger()}
      </div>
    );
  };
};