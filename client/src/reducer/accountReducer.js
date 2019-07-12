import {
    GET_ADMIN,
    PROFILE_LOADING,
 } from '../actions/types';
import { GET_EMPLOYEE } from '../Action/types';
  
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
          admin: action.payload,
          loading: false
        };
      case GET_EMPLOYEE:
          return {
              ...state,
              employee:action.employee,
              loading:false
          }
      default:
        return state;
    }
  }
  