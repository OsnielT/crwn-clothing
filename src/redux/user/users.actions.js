import { UserActionTypes } from './user.types';
// CALLING USER REDUCER 
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});