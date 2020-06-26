import React from 'react';
import './LandingPage.css'
import config from '../../config'

export default class LandingPage extends React.Component {

    state = {
        chords: []
    }

        getChords = () => {
            return fetch(`${config.API_ENDPOINT}/chords`, {
                headers: {
                },
            })
                .then(res =>
                    (!res.ok)
                        ? res.json().then(e => Promise.reject(e))
                        : res.json()
            )
                .then(data => {
                    console.log(data)
                    this.setState({ chords: data })
                    data.map(chord => {
                        
                        console.log(this.state.chords)
                    })
            })
    }
      
    render() {
        
        return (
            <section className="landing-page"> 
                <h1 className="landing-page-title">Welcome to Atlas Chords!</h1>
                <button onClick={this.getChords}>Get all chords</button>
                {this.state.chords.map(chord => {
                    
                    return <div key={chord.id}><h4>{chord.key} {chord.type}</h4>
                       </div>                   
                })}
            </section>
        )
    }
}

/*  <p>{chord.notes.map(note => {
                        console.log(note)
                        return note.string
                    })}</p> */