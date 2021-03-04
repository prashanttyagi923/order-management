import { loadUserFailure, loadUserInProgress, loadUserSuccess } from "../actions";

export const loadUser = (id) => async dispatch => {
    try {
        dispatch(loadUserInProgress());
        const response = await fetch(`http://localhost:3000/user/${id}`);
        const user = await response.json();
    
        dispatch(loadUserSuccess(user));
    } catch (e) {
        dispatch(loadUserFailure());
    }
}
