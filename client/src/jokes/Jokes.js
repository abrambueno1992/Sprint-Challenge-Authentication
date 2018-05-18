import React from 'react';
import axios from 'axios';

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
            jokes: []
        }

    };
    componentDidMount = () => {
        const token = localStorage.getItem('token');

        const options = {
            headers: {
                Authorization: token,
            },
        };
        axios
            .get('http://localhost:5000/api/jokes', options)
            .then(res => {
                console.log('This is the response data from jokes, res.data:', res.data);
                this.setState({ jokes: res.data });
            })
            .catch(err => {
                console.log('Error fetching jokes', err);
                this.props.history.push('/signin');
            })
    }

    render() {
        return (
            <div>
                <h2>Welcome to the JOKES Home Page</h2>
                {this.state.jokes.map((joke, i) => {
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

export default Jokes;