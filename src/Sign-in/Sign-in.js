import React from 'react';
import './Sign-in.css';
import { NavLink } from 'react-router-dom';

class SignIn extends React.Component {
    render() {
        return (
            <section className="sign-in-wrapper">
                <h3>Sign in</h3>
                <form className="sign-in-form">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="user7" required />

                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="****" required />
                    <a className="forgot-password" href="#">Forgot password?</a>

                    <button type="submit">Sign in</button>
                    <NavLink to="/">
                        <button type="button">Cancel</button>
                    </NavLink>
                    <a className="create-acc" href="/sign-up">Don't have an account yet?</a>
                </form>
            </section>
        )
    }
}



export default SignIn;