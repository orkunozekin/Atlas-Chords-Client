import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import './LoginForm.css'
import { NavLink } from 'react-router-dom'

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => { }
    }

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
                // this.props.onLoginSuccess().
                this.props.history.push('/')

            })
            .catch(res => {
                this.setState({ error: res.error })
        })
    }

    render() {
        return (
            <section className="sign-in-wrapper">
                
                <form className="sign-in-form" onSubmit={this.handleSubmitJwtAuth}>
                <h3 className="sign-in-header">Sign in</h3>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="user7" required />

                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="****" required />

                    <button className="sign-in-button" type="submit">Sign in</button>
                    <NavLink to="/">
                        <button className="cancel" type="button">Cancel</button>
                    </NavLink>
                    <a className="create-acc" href="/sign-up">Don't have an account yet?</a>
                </form>
            </section>
        )
    }
}    