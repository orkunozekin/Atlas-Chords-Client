import React from 'react'
import { NavLink } from 'react-router-dom'
import './SubmitNewChord.css'

export default class SubmitNewChord extends React.Component {
        render() {
            return (
                <section className="submit-chord-wrapper">
                    <h2 className="submit-chord-header">Add A New Chord</h2>
                    <form className="submit-chord-form">
                        <label></label>
                    </form>
                </section>
            )
        }
    }

    // This is where I write the POST event handler for submitting a new chord to the /chords endpoints

    //If a user is seaching for a chord and their request body has the exact same properties as an existing chord, then fetch that chord for them. Otherwise, display the error message : "Chord doesn't exist." And maybe ask them to submit that chord. 

    //To submit a new chord, users will need to provide the following: Key(string), type(string), notes(an array of objects each of which includes string(integer), fret(integer), finger(integer), strummed(boolean)). A fretboard will be provided for users to input a chord and users will pick each note on that fretboard of which a chord will consist of. 
    //Each fret on the fretboard will read the value of users' input and be converted to `"string", "fret", "finger", "strummed"` as an object inside an array of "notes", which is a property of the "newChord object", which is the response body. 

    //Key and type will be 

    //Get all chords component.  Then create submitnewchord component. 
    
    