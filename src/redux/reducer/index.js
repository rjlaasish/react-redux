import counterReducer from "./counterReducer";
import loggedReducer from "./isloggedReducer";
const { combineReducers } = require("redux");

const allReducer = combineReducers({
  islogged: loggedReducer,
  counter: counterReducer,
});

export default allReducer;
