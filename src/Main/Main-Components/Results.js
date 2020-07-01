import React from "react";
import Fret from "./Fret";
import Store from "./SoundFiles-Store";
import "./fretboard.css";



export default function Results(props) {
    console.log(props.notes)
    const notes = props.notes.filter(note => {
        return note.finger
    });
    console.log(notes)
    return (
        <div className="chord-result">
            <div className="result-img-and-add">
                {/* <button type="submit" className="add-to-favorites">Add to Favorites</button> */}
                <div className="fretboard-holder">
                    <div data-string="zero" className="fret fret-zero">
                        <Fret
                            string={1}
                            notes={notes}
                            fret={0}
                            name="e"
                            eachNote={Store.HighE.zero}
                        />
                        <Fret
                            string={2}
                            notes={notes}
                            fret={0}
                            name="e"
                            eachNote={Store.B.zero}
                        />
                        <Fret
                            string={3}
                            notes={notes}
                            fret={0}
                            name="e"
                            eachNote={Store.G.zero}
                        />
                        <Fret
                            string={4}
                            notes={notes}
                            fret={0}
                            name="e"
                            eachNote={Store.D.zero}
                        />
                        <Fret
                            string={5}
                            notes={notes}
                            fret={0}
                            name="e"
                            eachNote={Store.A.zero}
                        />
                        <Fret
                            string={6}
                            notes={notes}
                            fret={0}
                            name="e"
                            eachNote={Store.LowE.zero}
                        />
                    </div>


                    {/* <div data-string="one" className="string-one"> */}
                    <div data-string="one" className="fret fret-one">
                        <Fret string={1} notes={notes} fret={1} name="b" eachNote={Store.HighE.one} />
                        <Fret string={2} notes={notes} fret={1} name="b" eachNote={Store.B.one} />
                        <Fret string={3} notes={notes} fret={1} name="b" eachNote={Store.G.one} />
                        <Fret string={4} notes={notes} fret={1} name="b" eachNote={Store.D.one} />
                        <Fret string={5} notes={notes} fret={1} name="b" eachNote={Store.A.one} />
                        <Fret string={6} notes={notes} fret={1} name="b" eachNote={Store.LowE.one} />
                    </div>


                    {/* <div data-string="two" className="string-two"> */}
                    <div data-string="two" className="fret fret-two">
                        <Fret string={1} notes={notes} fret={2} name="g" eachNote={Store.HighE.two} />
                        <Fret
                            notes={notes}
                            fret={2}
                            string={2}
                            name="g"
                            eachNote={Store.B.two}
                        />
                        <Fret string={3} notes={notes} fret={2} name="g" eachNote={Store.G.two} />
                        <Fret string={4} notes={notes} fret={2} name="g" eachNote={Store.D.two} />
                        <Fret string={5} notes={notes} fret={2} name="g" eachNote={Store.A.two} />
                        <Fret string={6} notes={notes} fret={2} name="g" eachNote={Store.LowE.two} />
                    </div>


                    {/* <div data-string="three" className="string-three"> */}
                    <div data-string="three" className="fret fret-three">
                        <Fret string={1} notes={notes} fret={3} name="d" eachNote={Store.HighE.three} />
                        <Fret string={2} notes={notes} fret={3} name="d" eachNote={Store.B.three} />
                        <Fret string={3} notes={notes} fret={3} name="d" eachNote={Store.G.three} />
                        <Fret string={4} notes={notes} fret={3} name="d" eachNote={Store.D.three} />
                        <Fret string={5} notes={notes} fret={3} name="d" eachNote={Store.A.three} />
                        <Fret string={6} notes={notes} fret={3} name="d" eachNote={Store.LowE.three} />
                    </div>

                    {/* <div data-string="four" className="string-four"> */}
                    <div data-string="four" className="fret fret-four">
                        <Fret string={1} notes={notes} fret={4} name="a" eachNote={Store.HighE.four} />
                        <Fret string={2} notes={notes} fret={4} name="a" eachNote={Store.B.four} />
                        <Fret string={3} notes={notes} fret={4} name="a" eachNote={Store.G.four} />
                        <Fret string={4} notes={notes} fret={4} name="a" eachNote={Store.D.four} />
                        <Fret string={5} notes={notes} fret={4} name="a" eachNote={Store.A.four} />
                        <Fret string={6} notes={notes} fret={4} name="a" eachNote={Store.LowE.four} />
                    </div>
                    {/* <div data-string="five" className="string-five"> */}
                    <div data-string="five" className="fret fret-five">
                        <Fret
                            string={1}
                            notes={notes}
                            fret={5}
                            name="low-e"
                            eachNote={Store.HighE.five}
                        />
                        <Fret
                            string={2}
                            notes={notes}
                            fret={5}
                            name="low-e"
                            eachNote={Store.B.five}
                        />
                        <Fret
                            string={3}
                            notes={notes}
                            fret={5}
                            name="low-e"
                            eachNote={Store.G.five}
                        />
                        <Fret
                            string={4}
                            notes={notes}
                            fret={5}
                            name="low-e"
                            eachNote={Store.D.five}
                        />
                        <Fret
                            string={5}
                            notes={notes}
                            fret={5}
                            name="low-e"
                            eachNote={Store.A.five}
                        />
                        <Fret
                            string={6}
                            notes={notes}
                            fret={5}
                            name="low-e"
                            eachNote={Store.LowE.five}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}