import config from '../config'
import TokenService from './token-service'

const ChordApiService = {
  getChords() {
    return fetch(`${config.API_ENDPOINT}/chords
    `, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
    },
    
  getChord(chordId) {
    return fetch(`${config.API_ENDPOINT}/chords
    /${chordId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
 

  postChord(key, type, notes) {
    return fetch(`${config.API_ENDPOINT}/chords`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        key,
        type,
        notes
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
  
  
}

export default ChordApiService
