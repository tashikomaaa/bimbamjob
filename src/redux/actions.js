import {UPDATE_SIZE_INFO, UPDATE_ACTIONS_INFO} from "./actionType";

export const updateSizeInfo = content => ({
    type: UPDATE_SIZE_INFO,
    payload: {
        content
    }
})

export const updateActionsInfo = content => ({
    type: UPDATE_ACTIONS_INFO,
    payload: {
        content
    }
})