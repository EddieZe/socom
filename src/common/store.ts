import { createStore, combineReducers } from 'redux'
import { residents } from '../components/Residents/reducers'
const reducers = {
    residents
};

const rootReducer = combineReducers(reducers)
export const configureStore = () =>
    createStore(
        rootReducer,
        window['__REDUX_DEVTOOLS_EXTENSION__'] &&
        window['__REDUX_DEVTOOLS_EXTENSION__']()
    )