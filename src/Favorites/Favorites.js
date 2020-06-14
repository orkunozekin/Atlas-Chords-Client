import React from 'react';
import './Favorites.css';

export default function Favorites() {
    return (
    <section>
      <h3>My Favorite Guitar Chords</h3>
        <div class="fav-chords">
            <div id="c-major">
                <button type="button" title="delete">x</button>
                <h4>C Major</h4>
                <img src="https://www.chorder.com/images/guitar-fingering/chords/dm.jpg" alt="chord name"></img>
            </div>
        </div>
    </section>  
    )
}