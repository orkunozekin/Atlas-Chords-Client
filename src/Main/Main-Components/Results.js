import React from 'react';
import fretboard from './fretboard.jpg'

export default function Results() {
    return (
        <div className="chord-result">

            <hthree className="chord-name">C Major - Variation one</hthree>
            <div className="result-img-and-add">
                <button type="submit" className="add-to-favorites">Add to Favorites</button>
                <img className="result-img" src={fretboard} alt="nameofchord" />
                <div className="fretboard-holder">
                    <div data-string="zero" className="string-0">
                        <div data-fret="zero" className="f zero">f</div>
                        <div data-fret="one" className="f one">f1</div>
                        <div data-fret="two" className="f two">f2</div>
                        <div data-fret="three" className="f three">f3</div>
                        <div data-fret="four" className="f four">f4</div>
                        <div data-fret="four" className="f five">f5</div>
                    </div>
                       
                    <div data-string="one" className="string-one">
                        <div data-fret="zero" className="f-zero"></div>
                        <div data-fret="one" className="f-one"></div>
                        <div data-fret="two" className="f-two"></div>
                        <div data-fret="three" className="f-three"></div>
                        <div data-fret="four" className="f-four"></div>
                    </div>
                       
                    <div data-string="two" className="string-two">
                        <div data-fret="zero" className="f-zero"></div>
                        <div data-fret="one" className="f-one"></div>
                        <div data-fret="two" className="f-two"></div>
                        <div data-fret="three" className="f-three"></div>
                        <div data-fret="four" className="f-four"></div>
                    </div>
                        
                    <div data-string="three" className="string-three">
                        <div data-fret="zero" className="f-zero"></div>
                        <div data-fret="one" className="f-one"></div>
                        <div data-fret="two" className="f-two"></div>
                        <div data-fret="three" className="f-three"></div>
                        <div data-fret="four" className="f-four"></div>
                    </div>
                        
                    <div data-string="four" className="string-four">
                        <div data-fret="zero" className="f-zero"></div>
                        <div data-fret="one" className="f-one"></div>
                        <div data-fret="two" className="f-two"></div>
                        <div data-fret="three" className="f-three"></div>
                        <div data-fret="four" className="f-four"></div>
                    </div>
                        
                    <div data-string="five" className="string-five">
                        <div data-fret="zero" className="f-zero"></div>
                        <div data-fret="one" className="f-one"></div>
                        <div data-fret="two" className="f-two"></div>
                        <div data-fret="three" className="f-three"></div>
                        <div data-fret="four" className="f-four"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}