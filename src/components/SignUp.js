import React, {Component} from 'react';

class SignUp extends Component {
    //STATE
    state = {
        email: 'There is nothing'
    }
    render() { //FONCTIONS
        const updateEmailField = (e) => {
            this.setState({email: e.target.value})
        }
        return(
            <div>
                <h1>{this.state.email}</h1>
                <input type='email' 
                name='email'
                onChange={ (e) => updateEmailField(e)}
                 />
            </div>
        )
    }
}

export default SignUp;