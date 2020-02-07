import axios from 'axios';
import * as constants from './constants';
// import {fromJS} from 'immutable';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

export const logout = () => {
    return (dispatch) => {
        const action = {
            type: constants.LOGOUT,
            value: false
        }
        dispatch(action)
    }
}

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' +account + '&password=' +password).then((res) => {
            const result = res.data.data
            if(result) {
                dispatch(changeLogin())
            } else {
                alert("登陆失败")
            }
        })
    }
}

