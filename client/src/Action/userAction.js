import axios from 'axios';

import {GET_USER_DETAILS} from './types'

export const getUserDetails = dispatch => {
    axios.get('/semiAdmin/alluser')
        .then(res => console.log(res.data))
}