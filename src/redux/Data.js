import * as ActionTypes from "./actionTypes";

const initialState = {
  users: [],
  isLoading: true,
  errMess: "",
};

const Data = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        users: action.payload,
      };

    case ActionTypes.USER_REQUEST:
      return { ...state, isLoading: true, errMess: null};

    case ActionTypes.USER_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};

export default Data;
