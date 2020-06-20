import React from 'react';
import './Main.css';
import Footer from '../Footer/Footer'
import RootNote from './Main-Components/Root-Note';
import SelectChord from './Main-Components/Select-Chord';
import SelectVariation from './Main-Components/Select-Variation';
import Results from './Main-Components/Results';
import sample from './Main-Components/A-String-BFlat.wav'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.song = React.createRef()
    }

    render() {
        return (
            <section className="chords">
                <RootNote />
                <SelectChord />
                <SelectVariation />
                <audio src={sample} ref={this.song} controls ></audio>
                <button className="find-btn" type="submit">Find Chord</button>
                <Results />
                <Footer />

            </section>

        )
    }
}