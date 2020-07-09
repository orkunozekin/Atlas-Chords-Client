import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import './LoginForm.css';
import { NavLink } from 'react-router-dom';


export default class LoginForm extends Component {

    
    state = { error: null }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { username, password } = ev.target

        AuthApiService.postLogin({
            username: username.value,
            password: password.value
        })
            .then(res => {
                username.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.history.push('/submitnewchord')
                
            })
            .catch(res => {
                this.setState({ error: res.error })
        })
    }

    render() {
        const { error } = this.state
        return (
            <section className="log-in-wrapper">
                <h6 className="log-in-header">Log In To Atlas Chords</h6>
                <form className="log-in-form" onSubmit={this.handleSubmitJwtAuth}>
                    <div role="alert">
                        {error && <p className="incorrect-credentials">{error}</p>}
                    </div>
                    <label className="username-label" htmlFor="username">Username</label>
                    <input autoComplete="on" id="username" type="text" placeholder="user7" autoComplete="on" required />

                    <label className="password-label" htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="****" required />

                    <button className="button-to log-in" type="submit">Log In</button>
                    <NavLink to="/">
                        <button className="button-to cancel" type="button">Cancel</button>
                    </NavLink>
                    <a className="create-new-acc" href="/sign-up">Don't have an account yet?</a>
                </form>
            </section>
            
        );
    };
};