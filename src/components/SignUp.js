import React, { Component } from 'react';

class SignUp extends Component {
    //STATE
    state = {
        email: "mon@email.com",
        password: "monPassw0rd",
        name: "James",
        lastname: "Bond"
    }

    render() { //FONCTIONS

        //update the form
        const updateEmailField = (e) => {
            this.setState({ email: e.target.value })
        }
        const updatePasswordField = (e) => {
            this.setState({ password: e.target.value })
        }
        const updateNameField = (e) => {
            this.setState({ name: e.target.value })
        }
        const updateLastNameField = (e) => {
            this.setState({ lastname: e.target.value })
        }

        //send the form
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(this.state)
        }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>{JSON.stringify(this.state)}</h1>
                    <input type='email'
                        name='email'
                        onChange={(e) => updateEmailField(e)}
                    />
                    <input type='password'
                        name='password'
                        onChange={(e) => updatePasswordField(e)}
                    />
                    <input type='password'
                        name='passwordbis'
                    //onChange={ (e) => updateEmailField(e)}
                    />
                    <input type='text'
                        name='name'
                        onChange={(e) => updateNameField(e)}
                    />
                    <input type='text'
                        name='lastname'
                        onChange={(e) => updateLastNameField(e)}
                    />
                    <input type="submit" value="Soumettre" />

                </form>

            </div>
        )
    }
}

export default SignUp;