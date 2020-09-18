const { counterTypes } = require("../action/IncrementAction");

const initState = 0;

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case counterTypes.INCREMENT:
      return state + 1;
    case counterTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;