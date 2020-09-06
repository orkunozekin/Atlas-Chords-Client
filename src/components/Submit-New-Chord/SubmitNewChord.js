import React from "react";
import "./SubmitNewChord.css";
import ChordApiService from "../../services/chord-api-service";
import Button from '../Button/Button';

export default class SubmitNewChord extends React.Component {
    state = {};


    handleSubmitChord = (ev) => {
        ev.preventDefault();
        const {
            key,
            type,
            string_1_fret,
            string_1_finger,
            string_1_strummed,
            string_2_fret,
            string_2_finger,
            string_2_strummed,
            string_3_fret,
            string_3_finger,
            string_3_strummed,
            string_4_fret,
            string_4_finger,
            string_4_strummed,
            string_5_fret,
            string_5_finger,
            string_5_strummed,
            string_6_fret,
            string_6_finger,
            string_6_strummed,
        } = ev.target;
        //getting the value of each input for each field for submitting a guitar chord. 
        const string1 = {
            string: 1,
            fret: string_1_fret.value === "" ? null : string_1_fret.value,
            finger: string_1_finger.value,
            strummed: string_1_strummed.checked,
        };
        const string2 = {
            string: 2,
            fret: string_2_fret.value === "" ? null : string_2_fret.value,
            finger: string_2_finger.value,
            strummed: string_2_strummed.checked,
        };
        const string3 = {
            string: 3,
            fret: string_3_fret.value === "" ? null : string_3_fret.value,
            finger: string_3_finger.value,
            strummed: string_3_strummed.value,
        };
        const string4 = {
            string: 4,
            fret: string_4_fret.value === "" ? null : string_4_fret.value,
            finger: string_4_finger.value,
            strummed: string_4_strummed.value,
        };
        const string5 = {
            string: 5,
            fret: string_5_fret.value === "" ? null : string_5_fret.value,
            finger: string_5_finger.value,
            strummed: string_5_strummed.value,
        };
        const string6 = {
            string: 6,
            fret: string_6_fret.value === "" ? null : string_6_fret.value,
            finger: string_6_finger.value,
            strummed: string_6_strummed.value,
        };
        const notes = [string1, string2, string3, string4, string5, string6];
        const filteredNotes = notes.filter((note) => {
            if (note.strummed === false && note.finger === 0 && note.fret === null) {
                return {};
            } else {
                return {
                    string: note.string,
                    fret: note.fret,
                    finger: note.finger,
                    strummed: note.strummed,
                };
            }
        });
        console.log(key.value, type.value);
        ChordApiService.postChord(key.value, type.value, filteredNotes);
        this.props.history.push("/");
        //if strummed is false, then no finger needed.
    };
    render() {
        return (
            <section className="submit-chord-wrapper">
                <h2 className="submit-chord-header">Add A New Chord</h2>
                <p className="p">If a string is not pressed with a finger but is still strummed, its Fret value should be zero.</p>
                <p className="p"> If a string is not strummed at all, its Fret value should be left blank as well as Strummed checkbox</p>
                <form onSubmit={this.handleSubmitChord} className="submit-chord-form">
                    <div className="key-and-type">
                        <label htmlFor="key">Key:</label>
                        <input placeholder="A#" name="key" id="key"></input>
                        <label htmlFor="type">Type:</label>
                        <input placeholder="Major" name="type" id="type"></input>
                    </div>

                    <Button className="cancel-new-chord-button" type="reset">x</Button>

                    <div className="fretboard-wrapper">
                        <div className="fretboard-strings">
                            <div className="note-string">
                                <div className="label">E</div>
                                <select className="select-finger" name="string_1_finger">
                                    <option value="1">Finger 1</option>
                                    <option value="2">Finger 2</option>
                                    <option value="3">Finger 3</option>
                                    <option value="4">Finger 4</option>
                                    <option value="0">None</option>
                                </select>
                                <label className="fret-label" htmlFor="string_1_fret">
                                    Fret #:
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    max="5"
                                    name="string_1_fret"
                                    id="string_1_fret"
                                />
                                <div className="strummed">
                                    <label className="strummed-label" htmlFor="string-1">
                                        Strummed
                                    </label>
                                    <input
                                        id="string-1"
                                        name="string_1_strummed"
                                        type="checkbox"
                                    ></input>
                                </div>
                            </div>

                            <div className="note-string">
                                <div className="label">B</div>
                                <select className="select-finger" name="string_2_finger">
                                    <option value="1">Finger 1</option>
                                    <option value="2">Finger 2</option>
                                    <option value="3">Finger 3</option>
                                    <option value="4">Finger 4</option>
                                    <option value="0">None</option>
                                </select>
                                <label className="fret-label" htmlFor="string_2_fret">
                                    Fret #:
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    max="5"
                                    name="string_2_fret"
                                    id="string_2_fret"
                                />
                                <div className="strummed">
                                    <label className="strummed-label" htmlFor="string-2">
                                        Strummed
                                    </label>
                                    <input
                                        id="string-2"
                                        name="string_2_strummed"
                                        type="checkbox"
                                    ></input>
                                </div>
                            </div>

                            <div className="note-string">
                                <div className="label">G</div>
                                <select className="select-finger three" name="string_3_finger">
                                    <option value="1">Finger 1</option>
                                    <option value="2">Finger 2</option>
                                    <option value="3">Finger 3</option>
                                    <option value="4">Finger 4</option>
                                    <option value="0">None</option>
                                </select>
                                <label className="fret-label" htmlFor="string_3_fret">
                                    Fret #:
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    max="5"
                                    name="string_3_fret"
                                    id="string_3_fret"
                                />
                                <div className="strummed">
                                    <label className="strummed-label" htmlFor="string-3">
                                        Strummed
                                </label>
                                    <input
                                        id="string-3"
                                        name="string_3_strummed"
                                        type="checkbox"
                                    ></input>
                                </div>
                            </div>

                            <div className="note-string">
                                <div className="label">D</div>
                                <select className="select-finger" name="string_4_finger">
                                    <option value="1">Finger 1</option>
                                    <option value="2">Finger 2</option>
                                    <option value="3">Finger 3</option>
                                    <option value="4">Finger 4</option>
                                    <option value="0">None</option>
                                </select>
                                <label className="fret-label" htmlFor="string_4_fret">
                                    Fret #:
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    max="5"
                                    name="string_4_fret"
                                    id="string_4_fret"
                                />
                                <div className="strummed">
                                    <label className="strummed-label" htmlFor="string-4">
                                        Strummed
                                </label>
                                    <input
                                        id="string-4"
                                        name="string_4_strummed"
                                        type="checkbox"
                                    ></input>
                                </div>
                            </div>

                            <div className="note-string">
                                <div className="label">A</div>
                                <select className="select-finger" name="string_5_finger">
                                    <option value="1">Finger 1</option>
                                    <option value="2">Finger 2</option>
                                    <option value="3">Finger 3</option>
                                    <option value="4">Finger 4</option>
                                    <option value="0">None</option>
                                </select>
                                <label className="fret-label" htmlFor="string_5_fret">
                                    Fret #:
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    max="5"
                                    name="string_5_fret"
                                    id="string_5_fret"
                                />
                                <div className="strummed">
                                    <label className="strummed-label" htmlFor="string-5">
                                        Strummed
                                    </label>
                                    <input
                                        id="string-5"
                                        name="string_5_strummed"
                                        type="checkbox"
                                    ></input>
                                </div>
                            </div>
                            <div className="note-string">
                                <div className="label">E</div>
                                <select className="select-finger" name="string_6_finger">
                                    <option value="1">Finger 1</option>
                                    <option value="2">Finger 2</option>
                                    <option value="3">Finger 3</option>
                                    <option value="4">Finger 4</option>
                                    <option value="0">None</option>
                                </select>
                                <label className="fret-label" htmlFor="string_6_fret">
                                    Fret #:
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    max="5"
                                    name="string_6_fret"
                                    id="string_6_fret"
                                />
                                <div className="strummed">
                                    <label className="strummed-label" htmlFor="string-6">
                                        Strummed
                                    </label>
                                    <input
                                        id="string-6"
                                        name="string_6_strummed"
                                        type="checkbox"
                                    ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button className="submit-new-chord-button" type="submit">
                        Submit Chord
                    </Button>
                </form>
            </section>
        );
    }
}