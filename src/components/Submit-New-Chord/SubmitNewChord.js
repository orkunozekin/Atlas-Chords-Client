import React from 'react'
import { NavLink } from 'react-router-dom'
import './SubmitNewChord.css'
import ChordApiService from '../../services/chord-api-service'

export default class SubmitNewChord extends React.Component {

    state = {
        
    }



    handleSubmitChord = ev => {
        ev.preventDefault()
       
        const {
            key, type,
            string_1_fret, string_1_finger, string_1_strummed,
            string_2_fret, string_2_finger, string_2_strummed,
            string_3_fret, string_3_finger, string_3_strummed,
            string_4_fret, string_4_finger, string_4_strummed,
            string_5_fret, string_5_finger, string_5_strummed,
            string_6_fret, string_6_finger, string_6_strummed,
        } = ev.target
        // console.log(string_1_fret.value)
        // console.log(string_1_finger.value)
        console.log(string_1_strummed.checked)
        const string1 = {
            string: 1,
            fret: string_1_fret.value,
            finger: string_1_finger.value,
            strummed: string_1_strummed.checked
        }
        const string2 = {
            string: 2,
            fret: string_2_fret.value,
            finger: string_2_finger.value,
            strummed: string_2_strummed.checked
        }
        const string3 = {
            string: 3,
            fret: string_3_fret.value,
            finger: string_3_finger.value,
            strummed: string_3_strummed.value
        }
        const string4 = {
            string: 4,
            fret: string_4_fret.value,
            finger: string_4_finger.value,
            strummed: string_4_strummed.value
        }
        const string5 = {
            string: 5,
            fret: string_5_fret.value,
            finger: string_5_finger.value,
            strummed: string_5_strummed.value
        }

        const string6 = {
            string: 6,
            fret: string_6_fret.value,
            finger: string_6_finger.value,
            strummed: string_6_strummed.value
        }

        const notes = [
            string1,
            string2,
            string3,
            string4,
            string5,
            string6,
        ]    
        console.log(key.value, type.value)
        ChordApiService.postChord(key.value, type.value, notes)
        
    }

        render() {
            return (
                <section className="submit-chord-wrapper">
                    <h2 className="submit-chord-header">Add A New Chord</h2>
                    <NavLink to="/">
                        <button>
                            Search Chords
                        </button>
                        
                    </NavLink>
                    <form onSubmit={this.handleSubmitChord} className="submit-chord-form">
                        <label htmlFor="key">Key</label>
                        <input name="key" id="key"></input>
                        <label htmlFor="type">Type</label>
                        <input name="type" id="type"></input>

                        <div className="note-string">
                            <label>High E String</label>
                            <input value="0" name="string_1_fret" type="radio"></input> 
                            <input value="1" name="string_1_fret" type="radio"></input> 
                            <input value="2" name="string_1_fret" type="radio"></input> 
                            <input value="3" name="string_1_fret" type="radio"></input> 
                            <input value="4" name="string_1_fret" type="radio"></input> 
                            <input value="5" name="string_1_fret" type="radio"></input> 
                            <select name="string_1_finger">
                                <option value="1">Finger 1</option>
                                <option value="2">Finger 2</option>
                                <option value="3">Finger 3</option>
                                <option value="4">Finger 4</option>                                             
                            </select>
                            <input name="string_1_strummed" type="checkbox"></input>
                        </div>
                        <div className="note-string">
                            <label>B String</label>
                            <input value="0" name="string_2_fret" type="radio"></input> 
                            <input value="1" name="string_2_fret" type="radio"></input> 
                            <input value="2" name="string_2_fret" type="radio"></input> 
                            <input value="3" name="string_2_fret" type="radio"></input> 
                            <input value="4" name="string_2_fret" type="radio"></input> 
                            <input value="5" name="string_2_fret" type="radio"></input> 
                            <select name="string_2_finger">
                                <option value="1">Finger 1</option>
                                <option value="2">Finger 2</option>
                                <option value="3">Finger 3</option>
                                <option value="4">Finger 4</option>                                             
                            </select>
                            <input name="string_2_strummed" type="checkbox"></input>
                        </div>
                        <div className="note-string">
                            <label>G String</label>
                            <input value="0" name="string_3_fret" type="radio"></input> 
                            <input value="1" name="string_3_fret" type="radio"></input> 
                            <input value="2" name="string_3_fret" type="radio"></input> 
                            <input value="3" name="string_3_fret" type="radio"></input> 
                            <input value="4" name="string_3_fret" type="radio"></input> 
                            <input value="5" name="string_3_fret" type="radio"></input> 
                            <select name="string_3_finger">
                                <option value="1">Finger 1</option>
                                <option value="2">Finger 2</option>
                                <option value="3">Finger 3</option>
                                <option value="4">Finger 4</option>                                             
                            </select>
                            <input name="string_3_strummed" type="checkbox"></input>
                        </div>
                        <div className="note-string">
                            <label>D String</label>
                            <input value="0" name="string_4_fret" type="radio"></input> 
                            <input value="1" name="string_4_fret" type="radio"></input> 
                            <input value="2" name="string_4_fret" type="radio"></input> 
                            <input value="3" name="string_4_fret" type="radio"></input> 
                            <input value="4" name="string_4_fret" type="radio"></input> 
                            <input value="5" name="string_4_fret" type="radio"></input> 
                            <select name="string_4_finger">
                                <option value="1">Finger 1</option>
                                <option value="2">Finger 2</option>
                                <option value="3">Finger 3</option>
                                <option value="4">Finger 4</option>                                             
                            </select>
                            <input name="string_4_strummed" type="checkbox"></input>
                        </div>
                        <div className="note-string">
                            <label>A String</label>
                            <input value="0" name="string_5_fret" type="radio"></input> 
                            <input value="1" name="string_5_fret" type="radio"></input> 
                            <input value="2" name="string_5_fret" type="radio"></input> 
                            <input value="3" name="string_5_fret" type="radio"></input> 
                            <input value="4" name="string_5_fret" type="radio"></input> 
                            <input value="5" name="string_5_fret" type="radio"></input> 
                            <select name="string_5_finger">
                                <option value="1">Finger 1</option>
                                <option value="2">Finger 2</option>
                                <option value="3">Finger 3</option>
                                <option value="4">Finger 4</option>                                             
                            </select>
                            <input name="string_5_strummed" type="checkbox"></input>
                        </div>
                        <div className="note-string">
                            <label>Low E String</label>
                            <input value="0" name="string_6_fret" type="radio"></input> 
                            <input value="1" name="string_6_fret" type="radio"></input> 
                            <input value="2" name="string_6_fret" type="radio"></input> 
                            <input value="3" name="string_6_fret" type="radio"></input> 
                            <input value="4" name="string_6_fret" type="radio"></input> 
                            <input value="5" name="string_6_fret" type="radio"></input> 
                            <select name="string_6_finger">
                                <option value="1">Finger 1</option>
                                <option value="2">Finger 2</option>
                                <option value="3">Finger 3</option>
                                <option value="4">Finger 4</option>                                             
                            </select>
                            <input name="string_6_strummed" type="checkbox"></input>
                        </div>
                        <button type="submit">Submit Chord</button>

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
    
    