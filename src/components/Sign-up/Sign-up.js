import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sign-up.css'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'

export default class SignUp extends React.Component {
    static defaultProps = {
        onRegistrationSuccess: () => { }
    }

    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
        const { username, password, first_name, last_name, email } = ev.target
        console.log(username.value)
        // username.value
        const userInfo = {
            username: username.value,
            password: password.value,
            first_name: first_name.value,
            last_name: last_name.value,
            email: email.value
        }
        AuthApiService.postUser(userInfo)
            .then(() => {
               
                // this.props.onRegistrationSuccess()
                return AuthApiService.postLogin({
                    username: username.value,
                    password: password.value
                })
                    
            })
            .then(res => {
                console.log('login posted successfully')
                username.value = ''
                password.value = ''
                first_name.value = ''
                last_name.value = ''
                email.value = ''              
                TokenService.saveAuthToken(res.authToken)
                // this.props.onRegistrationSuccess()
                this.props.history.push('/')
            })

            .catch(res => {
                console.log(res)
                this.setState({ error: res.error })
        })


    }



    render() {
        const { error } = this.state
        return (
            <section className="sign-up-wrapper">
                <h3 className="sign-up-title">Create an account</h3>
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


                    <button type="submit">Sign up</button>
                    {/* Sign up will change Navbar's state's signedIn's value to true */}
                    <NavLink to="/">
                        <button type="button">Cancel</button>
                    </NavLink>
                </form>
            </section>
        )
    }

}
