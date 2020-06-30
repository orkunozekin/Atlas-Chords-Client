import React from 'react'

export default function SelectChord() {
    return (
        <div id="guitar-chords">
        <h4>Select Chord:</h4>
        <form>
            <label htmlFor="major">Major</label>
            <input name="chord_type" id="major" type="radio" className='chord-btn active'></input>
            <label htmlFor="minor">Minor</label>
            <input name="chord_type" id="minor" type="radio" className='chord-btn'></input>
        </form>
        {/* <a href="#" className='chord-btn active'>Major</a>
        <a href="#" className='chord-btn'>Minor</a> */}
    </div>
    )
}