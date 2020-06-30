import React from 'react';
import './LandingPage.css'
import config from '../../config'
import ChordApiService from '../../services/chord-api-service'
import { NavLink } from 'react-router-dom'

export default class LandingPage extends React.Component {

    state = {
        chords: []
    }

    handleGetChords = ev => {
        ev.preventDefault()

        const { key, type } = ev.target
        // console.log(key.value)

        return fetch(`${config.API_ENDPOINT}/chords`, {
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then((e) => {
                ChordApiService.getChords() // if the user's key and type input values match any of the existing chords, then return that chord to the user. Otherwise, return an error. 

                    .then(allChords => {
                        console.log(allChords)
                        const filteredData = allChords.filter(chord => {
                            return (chord.key === key.value) && (chord.type === type.value)
                        })
                        this.setState({ chords: filteredData })
                        // if (!filteredData.includes(key.value)) {
                        //     console.log('Key or Type missing')
                        // }    
                    })
            })
        // componentDidMount() {


    }


    render() {

        return (
            <section className="landing-page">
                <h1 className="landing-page-title">Welcome to Atlas Chords!</h1>
                <form onSubmit={this.handleGetChords}
                    className="searching-chords">
                    <label htmlFor="key-dropdown">Key:</label>
                    <select id="key-dropdown" name="key" onChange={(ev) => {
                        console.log(ev.target.value)
                        return ev.target.value
                    }}>
                        <option>Select Key</option>
                        <option value="C">C</option>
                        <option value="C#">C#</option>
                        <option value="D">D</option>
                        <option value="D#">D#</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="F#">F#</option>
                        <option value="G">G</option>
                        <option value="G#">G#</option>
                        <option value="A">A</option>
                        <option value="A#">A#</option>
                        <option value="B">B</option>
                    </select>
                    <br></br>
                    <label htmlFor="type">Type</label>
                    <select id="type" name="type" onChange={(ev) => {
                        console.log(ev.target.value)
                        return ev.target.value
                    }}>
                        <option>Select Type</option>
                        <option value="Major">Major</option>
                        <option value="Minor">Minor</option>
                    </select>
                    <br></br>
                    <button type="submit">Find Chord</button>
                </form>
                {this.state.chords.map(chord => {
                    return <NavLink className="chord-from-api" key={chord.id} to={'/chords/' + chord.id}>
                        <div>
                            <h4>{chord.key} {chord.type}</h4>
                            <p>{chord.notes.map(note => {
                                console.log(note)
                                return note.string
                            })}
                            </p>
                        </div>
                    </NavLink>
                })}
            </section>
        )
    }
}





