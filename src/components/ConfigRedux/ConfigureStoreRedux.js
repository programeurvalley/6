import {createStore } from 'redux'
import totalReducers from './Reducers/IndexReducers';

export const ConfigureStores = () => {
    const stores = createStore(totalReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    return stores;
}