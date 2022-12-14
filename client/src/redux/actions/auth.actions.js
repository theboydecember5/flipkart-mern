import axiosIntance from "../../helper/axios"
import { authConstants } from "./constants"
import axios from 'axios'




export const login = (user) => {

    return async (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST })
        const res = await axios.post('/admin/signin', {
            ...user
        })
        console.log(res)
        if (res.status === 200) {
            const { token, user } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({ type: authConstants.LOGIN_SUCCESS, payload: { user, token } })
        } else {
            if (res.status === 400) {
                dispatch({ type: authConstants.LOGIN_FAILURE, payload: { error: res.data.error } })
            }
        }
    }
}


export const isUserLoggedIn = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'))
            dispatch({
                type: authConstants.LOGIN_SUCCESS, payload: { user, token }
            })

        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: 'Login Error' }
            })
        }
    }
}


export const signout = () => {
    return async (dispatch) => {
        dispatch({ type: authConstants.LOGOUT_REQUEST })

        const res = await axiosIntance.post('/admin/signout')

        if (res.status === 200) {
            localStorage.clear()
            dispatch({
                type: authConstants.LOGIN_SUCCESS
            })
        } else {
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload: { error: res.data.error }
            })
        }

    }
}