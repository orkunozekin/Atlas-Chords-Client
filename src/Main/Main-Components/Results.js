import React from 'react';
import fretboard from './fretboard.jpg'
import Fret from '../../Fret'
import Store from './SoundFiles-Store'



export default function Results() {
    return (
        <div className="chord-result">

            <h3 className="chord-name">C Major - Variation one</h3>
            <div className="result-img-and-add">
                <button type="submit" className="add-to-favorites">Add to Favorites</button>
                <img className="result-img" src={fretboard} alt="nameofchord" />
                <div className="fretboard-holder">

                    <div data-string="zero" className="fret-zero">
                        <Fret fret="zero" name="e" eachNote={Store.HighE.zero} />
                        <Fret fret="one" name="e" eachNote={Store.HighE.one}/>
                        <Fret fret="two" name="e" eachNote={Store.HighE.two}/>
                        <Fret fret="three" name="e" eachNote={Store.HighE.three}/>
                        <Fret fret="four" name="e" eachNote={Store.HighE.four}/>
                        <Fret fret="five" name="e" eachNote={Store.HighE.five}/>
                  
                    </div>
                       
                    {/* <div data-string="one" className="string-one"> */}
                    <div data-string="one" className="fret-one">
                        <Fret fret="zero" name="b" eachNote={Store.B.zero}/>
                        <Fret fret="zero" name="b" eachNote={Store.B.one}/>
                        <Fret fret="zero" name="b" eachNote={Store.B.two}/>
                        <Fret fret="zero" name="b" eachNote={Store.B.three}/>
                        <Fret fret="zero" name="b" eachNote={Store.B.four}/>
                        <Fret fret="zero" name="b" eachNote={Store.B.five}/>   
                    </div>
                       
                    {/* <div data-string="two" className="string-two"> */}
                    <div data-string="two" className="fret-two">
                        <Fret fret="zero" name="g" eachNote={Store.G.zero}/>
                        <Fret fret="zero" name="g" eachNote={Store.G.one}/>
                        <Fret fret="zero" name="g" eachNote={Store.G.two}/>
                        <Fret fret="zero" name="g" eachNote={Store.G.three}/>
                        <Fret fret="zero" name="g" eachNote={Store.G.four}/>
                        <Fret fret="zero" name="g" eachNote={Store.G.five}/>
                      
                    </div>
                        
                    {/* <div data-string="three" className="string-three"> */}
                    <div data-string="three" className="fret-three">
                        <Fret fret="zero" name="d" eachNote={Store.D.zero}/>
                        <Fret fret="zero" name="d" eachNote={Store.D.one}/>
                        <Fret fret="zero" name="d" eachNote={Store.D.two}/>
                        <Fret fret="zero" name="d" eachNote={Store.D.three}/>
                        <Fret fret="zero" name="d" eachNote={Store.D.four}/>
                        <Fret fret="zero" name="d" eachNote={Store.D.five}/>  
                    </div>
{/*                         
                    <div data-string="four" className="string-four"> */}
                    <div data-string="four" className="fret-four">
                        <Fret fret="zero" name="a" eachNote={Store.A.zero}/>
                        <Fret fret="zero" name="a" eachNote={Store.A.one}/>
                        <Fret fret="zero" name="a" eachNote={Store.A.two}/>
                        <Fret fret="zero" name="a" eachNote={Store.A.three}/>
                        <Fret fret="zero" name="a" eachNote={Store.A.four}/>
                        <Fret fret="zero" name="a" eachNote={Store.A.five}/>
                       
                    </div>
                        
                    {/* <div data-string="five" className="string-five"> */}
                    <div data-string="five" className="fret-five">
                        <Fret fret="zero" name="low-e" eachNote={Store.LowE.zero} />
                        <Fret fret="zero" name="low-e" eachNote={Store.LowE.one} />
                        <Fret fret="zero" name="low-e" eachNote={Store.LowE.two} />
                        <Fret fret="zero" name="low-e" eachNote={Store.LowE.three} />
                        <Fret fret="zero" name="low-e" eachNote={Store.LowE.four} />
                        <Fret fret="zero" name="low-e" eachNote={Store.LowE.five} />
                  
                    </div>
                </div>
            </div>
        </div>
    )
}