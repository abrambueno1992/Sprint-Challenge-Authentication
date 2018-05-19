import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const slogin = {
    backgroundColor: 'beige'
};
const homeSt = {
    backgroundColor: 'blue'
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    };
    inputChangeHandler = event => {
        event.preventDefault();
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };
    sendCredentials = e => {
        console.log("Fired the sendcredentials", this.state)
        e.preventDefault();
        let tname = this.state.username;

        axios
            .post('http://localhost:5000/api/login', this.state)
            .then(response => {
                this.props.setName(tname);
                localStorage.setItem('token', response.data.token);
                console.log('This is response.data for login:', response)
                this.props.history.push('/jokes');
                
            })
            .catch(err => {
                localStorage.removeItem('token');
                console.log('error')
            });
            localStorage.setItem('username', this.state.username);
            
            this.setState({username: '', password:''});
    }
    handleSelect = (e) => {
        e.preventDefault();
        console.log('Fired in signin, the handleSelect', this.props)
        this.props.handleSelect();
        // this.props.history.push('/');

    }
    render() {
        // console.log("This is the localStorage username: ", localStorage.getItem('username') )
        return (
            <div style={slogin} >
            <h3>Please Sign In</h3>

                <form onSubmit={this.sendCredentials}>
                    <div>
                        <label htmlFor="username" />
                        <input
                            name="username"
                            value={this.state.username}
                            onChange={this.inputChangeHandler}
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" />
                        <input
                            name="password"
                            value={this.state.password}
                            onChange={this.inputChangeHandler}
                            type="password"
                        />
                    </div>
                    <div>
                        
                        <button>Sign in</button>
                    </div>

                </form>
                <div style={homeSt} >
                        <h3>Go Back To Home</h3>
                        <Link to="/" >
                        <button onClick={this.handleSelect} >Home</button>
                        </Link>
                        </div>
            </div>
        )
    }
};
export default Login;