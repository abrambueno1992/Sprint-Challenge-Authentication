// export const LOGGED_OUT = 'LOGGED_OUT';
// export const LOGIN_ACTION = 'LOGIN_ACTION';

// let users = [];

// export const LogInAction = (userObject) => {
//     return {
//         type: LOGIN_ACTION,
//         payload: userObject
//         // isLogin: bool
//     }
// }
import axios from 'axios';
export const LOGIN_ACTION = 'LOGIN_ACTION';
export const SIGNUP_ACTION = 'SIGNUP_ACTION';
export const GET_JOKE_ACTION = 'GET_JOKE_ACTION';
export const ERRORS = 'ERRORS';
export const DEL_TOKEN = 'DEL_TOKEN';

const ROOT_URL = 'http://localhost:5000/api';


export const signupAction = (username, password, checkpassword, history) => {
  return (dispatch) => {


      const newObj = { username: username, password: password };

      axios.post('http://localhost:5000/api/users', newObj)
        .then(resp => {
          dispatch({ type: SIGNUP_ACTION, payload: resp.data })
          history.push('/login');
          console.log(history)
          console.log('successfully created user', resp);
        })
        .catch(err => console.log('err creating user', err))

    }
  // }
}



export const loginAction = (obj, history) => {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/login`, obj)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      console.log('from action loginAction...', history, obj, res)
      dispatch({
        type: LOGIN_ACTION,
        payload: res.data.token,
        loggedUser: obj.username,
        password: obj.password
        });
        // getJokeAction()
        history.push('/jokes')
        
      })
     
      .catch(() => {
        dispatch({ type: ERRORS });
      });
      
    };
};


export const getJokeAction = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    const options = {
      headers: {
        Authorization: token,
      }
    };
    axios.get('http://localhost:5000/api/jokes', options)
      .then(resp => {
        dispatch({ type: GET_JOKE_ACTION, payload: resp.data })

      })
      .catch(err => dispatch({ type: ERRORS }));
  }
}

// export const signout = (obj, history) => {

//   return (dispatch) => {

//     // const newObj = { username: username.toLowerCase().toString(), password: password };
//     // console.log(obj);
//     axios.post('http://localhost:5000/api/login', obj)
//     .then( () => {
//       // dispatch({ type: LOGIN_ACTION })
//       // console.log(toooken);
//       // console.log('successfully logged in', resp);
//       history.push('/jokes')
//     })
//       .catch(err => console.log('err logging in', err))
//       // dispatch({ type: ERRORS });
//     }

// };

// export const deleteToken = () => {
//   return(dispatch) => {
//     type: DEL_TOKEN,
//     payload:
//   }
// }