export const counterTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

export const increment = () => {
  return {
    type: counterTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: counterTypes.DECREMENT,
  };
};
