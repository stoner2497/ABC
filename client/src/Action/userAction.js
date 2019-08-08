import axios from 'axios';

import {GET_USER_DETAILS} from './types'


export const getUserDetails = () => {
    return dispatch => {
        axios.get('/semiAdmin/alluser')
        .then(res => {dispatch({

            type:GET_USER_DETAILS,
            payload:res.data
        })
    }
        )
    }
}