import { LOAD_USER_SUCCESS, LOAD_USER_IN_PROGRESS, SIGNIN_SUCCESS, LOAD_USER_FAILURE } from "../actions";

const initialState = { user: [], itmes: [] };


export const users = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
    case SIGNIN_SUCCESS: {
        const {user} = {payload};
        return {
            ...state,
            isLoading: false,
            user: user
        }
    }

    case LOAD_USER_SUCCESS: {
        const { user } = payload;
        return {
            ...state,
            isLoading: false,
            user: user,
        };
    }
    case LOAD_USER_IN_PROGRESS:
        return {
            ...state,
            isLoading: true,
        }
    case LOAD_USER_FAILURE:
        return {
            ...state,
            isLoading: false,
        }
    default:
        return state;
    }
}