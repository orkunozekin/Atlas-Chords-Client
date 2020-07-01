import React from "react";
import './fretboard.css'

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
      // this.setState({ playing: false });
      this.note.currentTime = 0;
      this.note.play();
    }
  }
  

  hasFinger() {

  
    const note = this.props.notes.find(
      (note) => note.string == this.props.string && note.fret == this.props.fret
    );
    if (note) {
      return <div className="finger">{note.finger}</div>;
    } else {
      return "-"; 
    }
  }



  render() {
    const className = `note ${this.props.name} ${this.props.fret} ${
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
  }
}