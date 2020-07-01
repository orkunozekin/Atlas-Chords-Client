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
              fret="zero"
              name="e"
              eachNote={Store.HighE.zero}
            />
            <Fret
              string={2}
              notes={notes}
              fret="one"
              name="e"
              eachNote={Store.HighE.one}
            />
            <Fret
              string={3}
              notes={notes}
              fret="two"
              name="e"
              eachNote={Store.HighE.two}
            />
            <Fret
              string={4}
              notes={notes}
              fret="three"
              name="e"
              eachNote={Store.HighE.three}
            />
            <Fret
              string={5}
              notes={notes}
              fret="four"
              name="e"
              eachNote={Store.HighE.four}
            />
            <Fret
              string={6}
              notes={notes}
              fret={5}
              name="e"
              eachNote={Store.HighE.five}
            />
          </div>
          {/* <div data-string="one" className="string-one"> */}
          <div data-string="one" className="fret fret-one">
            <Fret notes={notes} fret="zero" name="b" eachNote={Store.B.zero} />
            <Fret notes={notes} fret="zero" name="b" eachNote={Store.B.one} />
            <Fret notes={notes} fret="zero" name="b" eachNote={Store.B.two} />
            <Fret notes={notes} fret="zero" name="b" eachNote={Store.B.three} />
            <Fret notes={notes} fret="zero" name="b" eachNote={Store.B.four} />
            <Fret notes={notes} fret="zero" name="b" eachNote={Store.B.five} />
          </div>
          {/* <div data-string="two" className="string-two"> */}
          <div data-string="two" className="fret fret-two">
            <Fret notes={notes} fret="zero" name="g" eachNote={Store.G.zero} />
            <Fret
              notes={notes}
              fret={2}
              string={2}
              name="g"
              eachNote={Store.G.one}
            />
            <Fret notes={notes} fret="zero" name="g" eachNote={Store.G.two} />
            <Fret notes={notes} fret="zero" name="g" eachNote={Store.G.three} />
            <Fret notes={notes} fret="zero" name="g" eachNote={Store.G.four} />
            <Fret notes={notes} fret="zero" name="g" eachNote={Store.G.five} />
          </div>
          {/* <div data-string="three" className="string-three"> */}
          <div data-string="three" className="fret fret-three">
            <Fret notes={notes} fret="zero" name="d" eachNote={Store.D.zero} />
            <Fret notes={notes} fret="zero" name="d" eachNote={Store.D.one} />
            <Fret notes={notes} fret="zero" name="d" eachNote={Store.D.two} />
            <Fret notes={notes} fret="zero" name="d" eachNote={Store.D.three} />
            <Fret notes={notes} fret="zero" name="d" eachNote={Store.D.four} />
            <Fret notes={notes} fret="zero" name="d" eachNote={Store.D.five} />
          </div>
          {/*                         
                    <div data-string="four" className="string-four"> */}
          <div data-string="four" className="fret fret-four">
            <Fret notes={notes} fret="zero" name="a" eachNote={Store.A.zero} />
            <Fret notes={notes} fret="zero" name="a" eachNote={Store.A.one} />
            <Fret notes={notes} fret="zero" name="a" eachNote={Store.A.two} />
            <Fret notes={notes} fret="zero" name="a" eachNote={Store.A.three} />
            <Fret notes={notes} fret="zero" name="a" eachNote={Store.A.four} />
            <Fret notes={notes} fret="zero" name="a" eachNote={Store.A.five} />
          </div>
          {/* <div data-string="five" className="string-five"> */}
          <div data-string="five" className="fret fret-five">
            <Fret
              notes={notes}
              fret="zero"
              name="low-e"
              eachNote={Store.LowE.zero}
            />
            <Fret
              notes={notes}
              fret="zero"
              name="low-e"
              eachNote={Store.LowE.one}
            />
            <Fret
              notes={notes}
              fret="zero"
              name="low-e"
              eachNote={Store.LowE.two}
            />
            <Fret
              notes={notes}
              fret="zero"
              name="low-e"
              eachNote={Store.LowE.three}
            />
            <Fret
              notes={notes}
              fret="zero"
              name="low-e"
              eachNote={Store.LowE.four}
            />
            <Fret
              notes={notes}
              fret="zero"
              name="low-e"
              eachNote={Store.LowE.five}
            />
          </div>
        </div>
      </div>
    </div>
  );
}