import {
    GO_TO_NEXT_PAGE,
    GO_TO_PREV_PAGE,
    HANDLE_NATIONALITY,
    HANDLE_BUSINESS,
    HANDLE_USER
} from '../action_types';

export const goToNextPage = (currentScreen) => ({
    type: GO_TO_NEXT_PAGE,
    payload: currentScreen + 1
});

export const goToPrevPage = (currentScreen) => ({
    type: GO_TO_PREV_PAGE,
    payload: currentScreen - 1
});

export const handleNationality = (payload) => ({
    type: HANDLE_NATIONALITY,
    payload
});

export const handleBusiness = (payload) => ({
    type: HANDLE_BUSINESS,
    payload
});

export const handleUser = (payload) => ({
    type: HANDLE_USER,
    payload
});
