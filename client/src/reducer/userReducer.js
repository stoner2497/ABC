import {GET_USER_DETAILS} from '../Action/types'

const initialState = {
    users:[]
}

export default function (state = initialState,action) {
    switch(action.type) {
        case GET_USER_DETAILS:
            return {
                ...state,
                users:action.payload
            }
        default:
            return state
    }
}