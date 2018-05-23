import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {getJokeAction} from '../actions/actions'
const jstyle = {
    marginBottom: 20,
    textDecoration: 'underline red',
    border: '2px solid yellow',
    backgroundColor: 'navy'
}
class Jokes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: [],
            fetch: false
        }

    };
    // componentDidMount = () => {
    //     if (window.localStorage.getItem('token') === null) {
    //         this.props.getJokeAction();
    //         this.fetchData();
    //         // this.setState({jokes: this.props.users})
    //     } else {
    //         this.props.getJokeAction();
    //         this.refetch()
    //         // this.setState({jokes: this.props.jokes})
    //     }
    //     // this.props.users;
    //     // this.props.jokes;

    //     console.log('This is the users, and jokes', this.props)
        
    // }
    componentDidMount = () => {
      this.props.getJokeAction();
    }
    
    fetchData = () => {
        // e.preventDefault();
        const token = localStorage.getItem('token');
        this.setState({fetch: !this.state.fetch})

        // const options = {
        //     headers: {
        //         Authorization: token,
        //     },
        // };
        // axios
        //     .get('http://localhost:5000/api/jokes', options)
        //     .then(res => {
        //         console.log('This is the response data from jokes, res.data:', res.data);
        //         this.setState({ jokes: res.data });
        //         console.log("This is the username in storage:", window.localStorage.getItem('username'))
        //         // this.props.checkToken();


        //     })
        //     .catch(err => {
        //         console.log('Error fetching jokes', err);
        //         this.props.history.push('/login');
        //     })
    };
    refetch = () => {
        const token = window.localStorage.getItem('token');
        this.setState({fetch: !this.state.fetch})
        // const options = {
        //     headers: {
        //         Authorization: token,
        //     },
        // };
        // axios
        // .get('http://localhost:5000/api/jokes', options)
        // .then(res => {
        //     // this.props.checkToken()
        //     console.log('This is the response data from jokes, res.data:', res.data);
        //     console.log("This is the username in storage:", window.localStorage.getItem('username'))

        //     this.setState({ jokes: res.data });
            
        // })
        // .catch(err => {
        //     console.log('Error fetching jokes', err);
        //     this.props.history.push('/login');
        // })
    }

    render() {
        // console.log("This is the state on Jokes, joke data: ", this.state.jokes)
        return (
            <div>
                {/* <h2>Welcome to the JOKES Home Page</h2> */}
                {this.props.jokes.map((joke, i) => {
                    return (<div key={joke + i} style={jstyle} >
                        <li >Joke type:{joke.type}</li>
                        <li>Joke setup:{joke.setup}</li>
                        <li>Joke punchline:{joke.punchline}</li>
                    </div>)
                })}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        jokes: state.jokes,
 
    }
}

export default connect(mapStateToProps, {getJokeAction})(Jokes);