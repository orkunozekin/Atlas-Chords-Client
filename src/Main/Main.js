import React from 'react';
import './Main.css';
import Footer from '../Footer/Footer'
import RootNote from './Main-Components/Root-Note';
import SelectChord from './Main-Components/Select-Chord';
import SelectVariation from './Main-Components/Select-Variation';
import Results from './Main-Components/Results';


export default class Main extends React.Component {
    render() {
        return (
            <section className="chords">
                <RootNote />
                <SelectChord />
                <SelectVariation />
                <button className="find-btn" type="submit">Find Chord</button>
                    <Results />
                <Footer />
            </section>

        )
    }
}