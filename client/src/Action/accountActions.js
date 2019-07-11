import axios from 'axios';


import {
    GET_ADMIN,
    GET_EMPLOYEE,
    CLEAR_CURRENT_PROFILE,
    PROFILE_LOADING
} from './types'


export const getAdmin = (AdminData) => dispatch =>  {
    dispatch(setProfileLoading())
    axios.get('/semAdmin/',AdminData)
      .then(res => {
        dispatch({
          type:GET_ADMIN,
          payload:res.data
        })
      })
}

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

export const clearCurrentProfile = () => {
    return {
      type: CLEAR_CURRENT_PROFILE
    };
  };