import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sign-up.css';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import './Sign-up.css';
import { FaSpinner } from 'react-icons/fa';

export default class SignUp extends React.Component {

    state = { error: null, loading: false };

    handleSubmit = ev => {
        ev.preventDefault()
        const { username, password, first_name, last_name, email } = ev.target;
        const userInfo = {
            username: username.value,
            password: password.value,
            first_name: first_name.value,
            last_name: last_name.value,
            email: email.value
        };

        this.setState({loading: true})
        AuthApiService.postUser(userInfo)
            .then(() => {

                return AuthApiService.postLogin({
                    username: username.value,
                    password: password.value
                })

            })
            .then(res => {
                this.setState({loading: false})
                console.log('login posted successfully')
                username.value = ''
                password.value = ''
                first_name.value = ''
                last_name.value = ''
                email.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.history.push('/')
            })

            .catch(res => {
                console.log(res)
                this.setState({ error: res.error })
            })


    };



    render() {
        const { error } = this.state;
        const loading = this.state.loading;
        return (
            <section className="sign-up-wrapper">
                <h3 className="sign-up-title">Create a new account</h3>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <label htmlFor="name">First Name</label>
                    <input id="name" name="first_name" type="text" placeholder="Bob" required />

                    <label htmlFor="last-name">Last Name</label>
                    <input id="last-name" name="last_name" type="text" placeholder="Marley" required />

                    <label htmlFor="create-username">Username</label>
                    <input id="create-username" name="username" type="text" placeholder="Marley2" required />

                    <label htmlFor="create-email">Email Address</label>
                    <input id="create-email" name="email" type="email" placeholder="bobmarley@gmail.com" required />

                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" placeholder="****" required />

                    <div className="user-buttons">
                        <NavLink to="/">
                            <button className="new-user cancel-user" type="button">Cancel</button>
                        </NavLink>
                        { !loading && <button className="submit-new-user" type="submit">Sign up</button> }
                        { loading && <button className="submit-new-user" type="submit" disabled><FaSpinner /></button> }
                    </div>
                </form>
            </section>
        );
    };

};
