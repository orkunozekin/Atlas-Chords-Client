import React from 'react';
import './LandingPage.css';
import config from '../../config';
import ChordApiService from '../../services/chord-api-service';
import { NavLink } from 'react-router-dom';
import { FaGuitar } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa';
import Button from '../Button/Button';

//This is the page that allows users to search for a guitar chord using the dropdowns.
export default class LandingPage extends React.Component {

    state = {
        chords: [],
        loading: false
    };

    handleGetChords = ev => {
        ev.preventDefault();

        const { key, type } = ev.target;
        this.setState({ loading: true })
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
                this.setState({ loading: false })
                ChordApiService.getChords() // if the user's key and type input values match any of the existing chords, then return that chord to the user. Otherwise, return an alert. 
                    .then(allChords => {
                        const filteredData = allChords.filter(chord => { //filter all chords to get only the one user searches for. 
                            console.log(chord)
                            return (chord.key === key.value) && (chord.type.includes(type.value))
                        })
                        this.setState({ chords: filteredData })
                        if (!filteredData.length) {
                            return alert('Cannot find that chord')
                        }
                    })
            })
    };
    render() {
        const loading = this.state.loading;
        return (
            <section className="landing-page">
                <h1 className="landing-page-header">Welcome to Atlas Chords!</h1>
                <FaGuitar className="guitar-icon" />
                <h3 className="landing-page-question">Are you ready to learn the 14 basic guitar chords?</h3>
                <p className="landing-page-p">Find a guitar chord below or submit your own chords <a className="submit-chord-hyperlink" href="/submitNewChord">here...</a></p>
                <form onSubmit={this.handleGetChords}
                    className="searching-chords-form">
                    <label className="form-label" htmlFor="key-dropdown">Key:</label>
                    <select id="key-dropdown" name="key" onChange={(ev) => {
                        return ev.target.value;
                    }}>
                        <option>Select Key</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                    </select>
                    <br></br>
                    <label className="form-label" htmlFor="type-dropdown">Type:</label>
                    <select id="type-dropdown" name="type" onChange={(ev) => {
                        return ev.target.value;
                    }}>
                        <option>Select Type</option>
                        <option value="Major">Major</option>
                        <option value="Minor">Minor</option>
                    </select>
                    <br></br>
                    {!loading && <Button className="find-chord-button" type="submit">Find Chord</Button>}
                    {loading && <Button className="find-chord-button" type="submit" disabled>
                        <FaSpinner className="load-icon"/></Button>}
                </form>
                {this.state.chords.map(chord => {
                    return <NavLink className="chord-from-api" key={chord.id} to={'/chords/' + chord.id}>
                        <div>
                            <h4>View {chord.key} {chord.type}</h4>
                        </div>
                    </NavLink>;
                })}
            </section>
        );
    };
};





