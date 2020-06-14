import React from 'react';
import './Main.css';

export default class Main extends React.Component {
    render() {
        return (
            <section className="chords">
                <div id="root-notes">
                    <h4>Select Root Note:</h4>
                    <a href="#" className="root-btn active">C</a>
                    <a href="#" className="root-btn">C#</a>
                    <a href="#" className="root-btn">D</a>
                    <a href="#" className="root-btn">D#</a>
                    <a href="#" className="root-btn">E</a>
                    <a href="#" className="root-btn">F</a>
                    <a href="#" className="root-btn">F#</a>
                    <a href="#" className="root-btn">G</a>
                    <a href="#" className="root-btn">G#</a>
                    <a href="#" className="root-btn">A</a>
                    <a href="#" className="root-btn">B♭</a>
                    <a href="#" className="root-btn">B</a>
                </div>

                <div id="guitar-chords">
                    <h4>Select Chord:</h4>
                    <a href="#" className='chord-btn active'>Major</a>
                    <a href="#" className='chord-btn'>Minor</a>
                </div>

                <div id="variations">
                    <h4>Select variation of this guitar chord:</h4>
                    <a href="#" className='variation-btn active'>1</a>
                    <a href="#" className='variation-btn'>2</a>
                    <a href="#" className='variation-btn'>3</a>
                </div>

                <button className="find-btn" type="submit">Find Chord</button>

                <div className="chord-result">
                    <h3>C Major - Variation 1</h3>
                    <button type="submit" className="add-to-favorites">Add to Favorites</button>
                    <img src="https://www.chorder.com/images/guitar-fingering/chords/c.jpg" alt="nameofchord" />
                </div>

                {/* <footer id="footer">
                    <a href="https://www.linkedin.com/in/orkun-ozekin/"><i class="fab fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
                    <a href="https://twitter.com/OrkunOzekin"><i class="fab fa-twitter-square"></i></a>
                </footer> */}
            </section>

        )
    }
}