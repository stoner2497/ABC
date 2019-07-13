import { GET_ERRORS,SET_CURRENT_USER } from './types'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerAdmin = (userdata , history) => dispatch => {
    axios
        .post('/register/superAdmin',userdata)
        .then(res => history.push('/'))
        .catch(err => dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        }))
}

export const loginAdmin = userdata => dispatch => {
    axios
        .post('/',userdata)
        .then(res => {
            const {token} = res.data;

            localStorage.setItem('jwttoken', token)

            setAuthToken(token)
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => dispatch({
            type:GET_ERRORS,
            payload:err
        }))
}
 
// Set logged in user
export const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };
  
  export const forgetPassword = (userdata,history) => dispatch => {
      axios.post("/forget-password",userdata)
       .then(res => history.push('/login'))
       .catch(err => dispatch({
           type:GET_ERRORS,
           payload:err.response.data
       }))
  }

  export const changePassword = (id,history) => dispatch => {
    axios.post(`/change-password/${id}`)
     .then(res => history.push('/login'))
     .catch(err => dispatch({
         type:GET_ERRORS,
         payload:err.response.data
     }))
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwttoken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}