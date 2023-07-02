import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from '../actions/asyncActions';

// Estado inicial para userState
const initialState = {
    fetching: false,
    loged: false,
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
                loged: true,
                error: null
            }
        case API_CALL_SUCCESS:
            return {
                ...state,
                fetching: false,
                loged: true,
                error: null
            }
        case API_CALL_FAILURE:
            return {
                ...state,
                fetching: false,
                loged: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}
