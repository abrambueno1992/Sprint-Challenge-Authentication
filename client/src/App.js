import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import Login from './login/Login';
import Jokes from './jokes/Jokes';
import Signup from './signup/Signup';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: false,
      logged: false,
      introSty: {
        backgroundColor: 'gold',
        color: 'white',
        padding: 10,
        height: 1200,
        textDecoration: 'underline red',
        textAlign: 'center'
      },
      introHeader: {
        // color: 'aqua',
        border: '2px solid blue',
        padding: 10,
        display: 'inline-flex',
        marginLeft: '25%',
        marginRight: '25%'
      },
      username: ''
    }
  }
  componentDidMount = () => {
    this.checkToken();
  }
  checkToken = () => {

    if (window.localStorage.getItem('token') === null) {
      this.setState({ introSty: { backgroundColor: 'gold', padding: 10, height: 1200, color: 'white', textDecoration: 'underline red', border: '2px solid white', textAlign: 'center' } })
      this.setState({ logged: false });
      localStorage.setItem('username', '');
      
      // this.setState({ select: false });
      this.props.history.push('/');

    } else {
      this.setState({ introSty: { backgroundColor: 'beige', padding: 10, height: 1200, color: 'red', textDecoration: 'none', border: '2px solid white', textAlign: 'center' } })
      this.setState({ logged: true });
      this.setState({ select: true });
      this.setState({username: window.localStorage.getItem('username')})
      // this.setState({username: ''})
      this.props.history.push('/jokes');
    }
    console.log('This is the localStorageToken: ', localStorage.getItem('token'))
  }

  signout = () => {
    localStorage.removeItem('token');
    this.setState({username:''})
    this.props.history.push('/login');
  };
  handleSelect = () => {
    if (this.state.select === false) {
      this.setState({ select: true });
      this.setState({ introSty: { backgroundColor: 'beige', padding: 10, height: 1200, color: 'red', textDecoration: 'none', border: '2px solid white', textAlign: 'center' } })
    } else {
      this.setState({ select: false });
      this.setState({ introSty: { backgroundColor: 'gold', padding: 10, height: 1200, color: 'white', textDecoration: 'underline red', border: '2px solid white', textAlign: 'center' } })
    }

    // this.setState({ select: !this.state.select });


    console.log('Fired the handle Select')
    this.passProps();
    this.passProps2();

  };
  passProps = (props) => {
    console.log("Fired pass props")
    return (
      <Login
        handleSelect={this.handleSelect.bind(this)}
        setName={this.setName.bind(this)}
        {...props}
      />
    )
  };

  setName = (name) => {
    this.setState({ username: name });
  }

  passProps2 = (props) => {
    return (
      <Signup
        handleSelect={this.handleSelect.bind(this)}
        setName={this.setName.bind(this)}
        {...props}
      />
    )
  }
  render() {
    console.log('Is the token on storage?:', this.state.logged)
    return (
      <div style={this.state.introSty}>
        {this.state.select ?
          <div >
            {/* <h1>Select is TRUE</h1> */}
            {
              localStorage.getItem('token') && ( <div>
              <button onClick={this.signout}>Sign out</button>
              <h2>Hello {this.state.username} </h2> </div>)}
            {/* <Link to="/jokes"><button>See Jokes</button></Link> */}
            <Route exact path="/login" component={this.passProps} />
            <Route exact path="/jokes" component={Jokes} />
            <Route exact path="/signup" component={this.passProps2} />
          </div> :
          <div  >
            <h1 style={this.state.introHeader}>Welcome to Sprint Challege-Authentication </h1>
            <h3 style={this.state.introHeader}>Please Choose the options of Login or Create New User</h3>
            <Link to="/login" onClick={this.checkToken} > <button onClick={this.handleSelect} >Log In</button> </Link>
            <Link to="/signup" onClick={this.checkToken}><button onClick={this.handleSelect}>Create New User</button></Link>
          </div>}

      </div>
    );
  }
}

export default withRouter(App);
