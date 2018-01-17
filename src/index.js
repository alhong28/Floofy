import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import petReducer from './reducers/pet_reducer'
import vetReducer from './reducers/vet_reducer'
import shelterReducer from './reducers/shelter_reducer'
import {BrowserRouter as Router} from 'react-router-dom'

const rootReducer = combineReducers({pets: petReducer, vets: vetReducer, shelters: shelterReducer})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
