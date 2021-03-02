import * as ActionTypes from './actionTypes';

export const fetchUser = () => (dispatch) => {
    // console.log("fetchEconomicalArticle called");

    dispatch(userRequest());

    return fetch("https://vyorius.herokuapp.com/test/")
        .then((res) => res.json())
        .then((res2) => {
            dispatch(userSuccess(res2.message))
        })
        .catch(err => {
            dispatch(userFailed(err.message))
        })


}

export const userRequest = () => ({
    type: ActionTypes.USER_REQUEST
});

export const userFailed = (errmess) => ({
    type: ActionTypes.USER_FAILED,
    payload: errmess
});

export const userSuccess = (users) => ({
    type: ActionTypes.USER_SUCCESS,
    payload: users
});