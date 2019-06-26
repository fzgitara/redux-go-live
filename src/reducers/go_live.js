import {
    GO_TO_NEXT_PAGE,
    GO_TO_PREV_PAGE,
    HANDLE_NATIONALITY,
    HANDLE_BUSINESS,
    HANDLE_USER
} from '../action_types';

const initialState = {
    currentScreen: 0,
    nationality: 'Indonesia',
    business: {
        name: '',
        email: '',
        phone: ''
    },
    user: {
        full_name: '',
        location: ''
    }
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case GO_TO_NEXT_PAGE:
        return {
            ...state,
            currentScreen: payload
        };
    case GO_TO_PREV_PAGE:
        return {
            ...state,
            currentScreen: payload
        }
    case HANDLE_NATIONALITY:
        return {
            ...state,
            nationality: payload
        }
    case HANDLE_BUSINESS:
        return {
            ...state,
            business: payload
        }
    case HANDLE_USER:
        return {
            ...state,
            user: payload
        }
    default:
        return state;
    }
};
