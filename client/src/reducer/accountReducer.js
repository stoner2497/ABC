import {
    GET_ADMIN,
    PROFILE_LOADING,
 } from '../actions/types';
  
  const initialState = {
    admin: null,
    employee: null,
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case PROFILE_LOADING:
        return {
          ...state,
          loading: true
        };
      case GET_ADMIN:
        return {
          ...state,
          profile: action.payload,
          loading: false
        };
      default:
        return state;
    }
  }
  