import React from 'react'
import ChordApiService from '../../services/chord-api-service'
import TokenService from '../../services/token-service'
// import fretboard from '../../Main/Main-Components/fretboard.jpg'
import Results from '../../Main/Main-Components/Results'
import UserContext from "../ContextCreater";


export default class Chord extends React.Component {

    state = {
        chord: null
    }

    componentDidMount() {
        const chordId = this.props.match.params.id
        console.log(this.props.match)
        fetch(`http://localhost:8000/api/chords/${chordId}`, {
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
                // console.log(this.state.chord)
            })
            .catch(error => { console.error({ error }) })
    }


    render() {
    
        
        if (this.state.chord) {
            const chord = this.state.chord
            return (            
                <section className="each-chord">
                        <h3 key={chord.id}>{chord.key} {chord.type}</h3>
                        {console.log(this.state.chord)}
                    {/* <p>{console.log(JSON.stringify(chord.notes))}</p> */}
                    {/* {this.state.chord.length > 0 && <Results notes={chord.notes}/>} */}
                    <Results notes={chord.notes}/>
                </section>   
           
            )
        }
        else {
            return "Loading..."
        }

        // console.log(chord)
      
    }
}