import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthReducer } from './reducers/reducers';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
const store = createStore(AuthReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
// const store = createStore(friendsReducer, applyMiddleware(thunk,logger));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={withRouter(App)} />
        </Router>
    </Provider >,
    document.getElementById('root'))
