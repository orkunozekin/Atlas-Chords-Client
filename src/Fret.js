import React from "react";

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
      
      this.setState({ playing: false });
      this.note.currentTime = 0;
    }
  }
  
  render() {
    const className = `${this.props.name} ${this.props.fret} ${
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
        {this.props.name}
      </div>
    );
  }
}