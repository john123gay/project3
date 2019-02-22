import React, {Component} from "react";
import fire from '../config/fire'

class  Login extends Component {

    state = {
        eml:'',
        password:''
    }

    signUp = event => {
        event.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.eml, this.state.password)
        .catch(err => console.log(err))
    }

    loginUser = event => {
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.eml, this.state.password)
        .catch(err => console.log(err))
    }

    handleChange = event => {
        const {name,value} = event.target
        
        this.setState({[name]:value})
    };

    render () { 
        return (
            <form autoComplete="off" className="col-md-6 centered">
                <div className="form-group">
                    <i className="fas fa-user"></i>
                    <input value={this.state.eml} onChange={this.handleChange} type="email" name="eml"
                    />
                </div>
                <div className="form-group">
                    <i className="fas fa-lock"></i>
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password"
                    />
                </div>
                <i onClick={this.loginUser} className="fas fa-arrow-circle-right"></i> 
                <p id="signup" onClick={this.signUp}>Signup</p>
            </form>
        )
    };
};

export default Login;