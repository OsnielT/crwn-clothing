import { createSelector } from "reselect";

// Input Selector (gets state)
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)