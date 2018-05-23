// import {LOGIN_ACTION, LOGGED_OUT} from '../actions/actions';
// const initialState = {
//     users: [
//         // {
//         //     username: '',
//         //     boolean:''
//         // }
//     ]
// }
// export const usersReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case LOGIN_ACTION:
//         console.log("You are logged in for the state");
        
//         return (
//             Object.assign({}, state, {
//                 users: [...state.users.concat(action.payload)]
//             })
//         )
//         // return Object.assign({}, state, [{users: ...state.users, action.payload}])
//         case LOGGED_OUT:
//         // Object.assign({}, )
//         console.log("you are logged out in the state")
//         default:
//         return state;
//     }
// }
import {LOGIN_ACTION, SIGNUP_ACTION, GET_JOKE_ACTION, ERRORS} from '../actions/actions';
// {token: '', hash: '', username: '' }
const initialState = {
    users: [],
    jokes: [],
 }



export const AuthReducer = (state = initialState, action) =>  {

    switch(action.type) {

        case SIGNUP_ACTION:
            return Object.assign({}, state,  {
                username: [...state.username, action.payload.username],
                password: [...state.users, action.payload.password]
            });


        case LOGIN_ACTION:
        console.log('from reducer.....................', action.loggedUser, action.password, action.payload)
        if(state.users.length) {
            const any = state.users.filter((el, i )=> {
                el.username === action.loggedUser.username
                return i;
            });

            return Object.assign({}, state, {
                token: state.users[any].token = action.payload,
            });
            }
        else {
            console.log('here in login action..')
            return Object.assign({}, state, {users : {username: action.loggedUser, token: action.payload}} );

        }


        case GET_JOKE_ACTION:
        if(!state.jokes.length)
            return Object.assign({}, state, {jokes: action.payload})
        else return Object.assign({}, state, {jokes: action.payload});

        case ERRORS:
        return {Error: 'error form reducer'};

        default:
        return state;
    }

}