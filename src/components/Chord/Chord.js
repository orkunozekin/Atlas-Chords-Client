import React from 'react';
import TokenService from '../../services/token-service';
import Results from '../Results/Results';
import './Chord.css';



//This component is for getting a single chord by it's id. 

export default class Chord extends React.Component {

    state = {
        chord: null
    }

    componentDidMount() {
        const chordId = this.props.match.params.id
        fetch(`https://still-brushlands-47885.herokuapp.com/api/chords/${chordId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then((res) => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))

                return res.json()
            })
            .then((data) => {
                console.log(data)
                this.setState({
                    chord: data
                })

            })
            .catch(error => { console.error({ error }) })
    }


    render() {


        if (this.state.chord) {
            const chord = this.state.chord;
            return (
                <section className="each-chord">
                    <h3 className="chord-title" key={chord.id}>{chord.key} {chord.type}</h3>
                    <Results notes={chord.notes} />

                </section>

            )
        }
        else {
            return "Loading...";
        }


    }
}