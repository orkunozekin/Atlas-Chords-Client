import React from "react";
import Fret from "../Fret/Fret";
import Store from "../SoundFiles/SoundFiles-Store";
import "./Results.css";
import { NavLink } from "react-router-dom";

//Results Page
// filtering to mark the notes that have a fingering number to make up a chord
export default function Results(props) {
    const notes = props.notes.filter(note => { 
        return note.finger
    });

    return (
        <div className="chord-result">
                <div className="fretboard-holder"> { /* fretboard img is background for this element. Each Fret is positioned to act as a note on a guitar fretboard and can be played audibly */}
                    <div data-string="zero" className="fret fret-zero">
                        <Fret string={1} notes={notes} fret={0} name="e-string1" eachNote={Store.HighE.zero} />
                        <Fret string={2} notes={notes} fret={0} name="e-string2" eachNote={Store.B.zero} />
                        <Fret string={3} notes={notes} fret={0} name="e-string3" eachNote={Store.G.zero} />
                        <Fret string={4} notes={notes} fret={0} name="e-string4" eachNote={Store.D.zero} />
                        <Fret string={5} notes={notes} fret={0} name="e-string5" eachNote={Store.A.zero} />
                        <Fret string={6} notes={notes} fret={0} name="e-string6" eachNote={Store.LowE.zero} />
                    </div>
                    <div data-string="one" className="fret fret-one">
                        <Fret string={1} notes={notes} fret={1} name="b-string1" eachNote={Store.HighE.one} />
                        <Fret string={2} notes={notes} fret={1} name="b-string2" eachNote={Store.B.one} />
                        <Fret string={3} notes={notes} fret={1} name="b-string3" eachNote={Store.G.one} />
                        <Fret string={4} notes={notes} fret={1} name="b-string4" eachNote={Store.D.one} />
                        <Fret string={5} notes={notes} fret={1} name="b-string5" eachNote={Store.A.one} />
                        <Fret string={6} notes={notes} fret={1} name="b-string6" eachNote={Store.LowE.one} />
                    </div>

                    <div data-string="two" className="fret fret-two">
                        <Fret string={1} notes={notes} fret={2} name="g-string1" eachNote={Store.HighE.two} />
                        <Fret string={2} notes={notes} fret={2} name="g-string2" eachNote={Store.B.two} />
                        <Fret string={3} notes={notes} fret={2} name="g-string3" eachNote={Store.G.two} />
                        <Fret string={4} notes={notes} fret={2} name="g-string4" eachNote={Store.D.two} />
                        <Fret string={5} notes={notes} fret={2} name="g-string5" eachNote={Store.A.two} />
                        <Fret string={6} notes={notes} fret={2} name="g-string6" eachNote={Store.LowE.two} />
                    </div>

                    <div data-string="three" className="fret fret-three">
                        <Fret string={1} notes={notes} fret={3} name="d-string1" eachNote={Store.HighE.three} />
                        <Fret string={2} notes={notes} fret={3} name="d-string2" eachNote={Store.B.three} />
                        <Fret string={3} notes={notes} fret={3} name="d-string3" eachNote={Store.G.three} />
                        <Fret string={4} notes={notes} fret={3} name="d-string4" eachNote={Store.D.three} />
                        <Fret string={5} notes={notes} fret={3} name="d-string5" eachNote={Store.A.three} />
                        <Fret string={6} notes={notes} fret={3} name="d-string6" eachNote={Store.LowE.three} />
                    </div>

                    <div data-string="four" className="fret fret-four">
                        <Fret string={1} notes={notes} fret={4} name="a-string1" eachNote={Store.HighE.four} />
                        <Fret string={2} notes={notes} fret={4} name="a-string2" eachNote={Store.B.four} />
                        <Fret string={3} notes={notes} fret={4} name="a-string3" eachNote={Store.G.four} />
                        <Fret string={4} notes={notes} fret={4} name="a-string4" eachNote={Store.D.four} />
                        <Fret string={5} notes={notes} fret={4} name="a-string5" eachNote={Store.A.four} />
                        <Fret string={6} notes={notes} fret={4} name="a-string6" eachNote={Store.LowE.four} />
                    </div>

                    <div data-string="five" className="fret fret-five">
                        <Fret string={1} notes={notes} fret={5} name="low-e-string1" eachNote={Store.HighE.five} />
                        <Fret string={2} notes={notes} fret={5} name="low-e-string2" eachNote={Store.B.five} />
                        <Fret string={3} notes={notes} fret={5} name="low-e-string3" eachNote={Store.G.five} />
                        <Fret string={4} notes={notes} fret={5} name="low-e-string4" eachNote={Store.D.five} />
                        <Fret string={5} notes={notes} fret={5} name="low-e-string5" eachNote={Store.A.five} />
                        <Fret string={6} notes={notes} fret={5} name="low-e-string6" eachNote={Store.LowE.five} />
                    </div>
                </div>
                <div className="fret-numbers">
                    <p className="fret-number-zero">0</p>
                    <p className="fret-number-one">1</p>
                    <p className="fret-number-two">2</p>
                    <p className="fret-number-three">3</p>
                    <p className="fret-number-four">4</p>
                    <p className="fret-number-five">5</p>
                </div>
                <p className="p">Result notes are numbered to indicate which finger to use for each note.</p>
                <p className="p">e.g., Finger 1 = index, Finger 2 = middle, etc...</p>
                <p className="p">Strum each note on the fretboard above to hear their sound!</p>
                <NavLink  to="/">
                    <button className="go-back-button">Go Back</button> 
                </NavLink>
                
        </div>
    );
};