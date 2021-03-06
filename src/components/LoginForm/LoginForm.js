import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import './LoginForm.css';
import { NavLink } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import Button from '../Button/Button';

//Log in Form
export default class LoginForm extends Component {

    
    state = { error: null, loading: false };

    handleSubmitJwtAuth = ev => {
        ev.preventDefault();
        this.setState({ error: null, loading: true })
        const { username, password } = ev.target;

        AuthApiService.postLogin({ //use credentials to login if correct, otherwise an error will be displayed.
            username: username.value,
            password: password.value
        })
            .then(res => {
                this.setState({loading: false})
                username.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.history.push('/submitnewchord')
                
            })
            .catch(res => {
                this.setState({ error: res.error, loading: false })
        })
    }

    render() {
        const { error } = this.state;
        const loading = this.state.loading;
        return (
            <section className="log-in-wrapper">
                <h6 className="log-in-header">Log In To Atlas Chords</h6>
                <form className="log-in-form" onSubmit={this.handleSubmitJwtAuth}>
                    <div role="alert">
                        {error && <p className="incorrect-credentials">{error}</p>}
                    </div>
                    <label className="username-label" htmlFor="username">Username</label>
                    <input autoComplete="on" id="username" type="text" placeholder="username" required />

                    <label className="password-label" htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="****" required />

                    { !loading && <Button className="button-to log-in" type="submit">Log In</Button> }
                    {loading && <Button className="button-to log-in" type="submit" disabled>
                        <FaSpinner className="load-icon"/>
                        </Button>}
                    <NavLink to="/">
                        <Button className="button-to cancel" type="button">Cancel</Button>
                    </NavLink>
                    <a className="create-new-acc" href="/sign-up">Don't have an account yet?</a>
                </form>
            </section>
            
        );
    };
};