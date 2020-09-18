import { createStore } from 'redux';
import allReducer from './reducer';

const store = createStore(allReducer);


export default store;