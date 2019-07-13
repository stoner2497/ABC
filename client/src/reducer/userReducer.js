import {GET_USER_DETAIL} from '../Action/types'

const initialState = {
    userDetail:[]
}

export default function (state = initialState,action) {
    switch(action.type) {
        case GET_USER_DETAIL:
            return {
                ...state,
                userDetail:action.payload
            }
        default:
            return state
    }
}