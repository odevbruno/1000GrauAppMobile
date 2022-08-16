import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env'; 


const slice = createSlice({
    name: 'login',
    initialState: {
        sucess: false,
        loading: false,
        data: null,
        error: null,
    },

    reducers: {
        fetchStarded(state) {
            state.loading = true,
                state.sucess = false
        },
        fetchSucess(state, action) {
            state.loading = false,
                state.data = action.payload,
                state.sucess = true,
                state.error = null
        },
        fetchError(state, action) {
            state.loading = false,
                state.data = null,
                state.error = action.payload,
                state.sucess = false
        },
        resetState(state) {
            state.loading = false,
                state.data = null,
                state.error = null
        },
        salvaToken(state, action){
            state.loading = false,
            state.data = action.payload
        }
    }
})

const { fetchStarded, fetchSucess, fetchError, resetState: resetUserState , salvaToken} = slice.actions

export const userLogout = () => async (dispatch) => {
    await dispatch(resetUserState()); 
}

export const fetchToken = (user) => async (dispatch) => {
    try {

        dispatch(fetchStarded())
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        )
        const data = await response.json()

        console.log(data.detail);
        console.log(data);
 
        if (data.access_token != undefined) {
            dispatch(salvaToken(data))
            
            const storeData = async (value) => {
                const jsonValue = JSON.stringify(value)
                await AsyncStorage.setItem('token', jsonValue)
                dispatch(fetchSucess(data));
                return;
            }
            storeData(data);
        } else {
            dispatch(fetchError(data.detail));

        }
    } catch (error) {

        return dispatch(fetchError(error.message));
    }
}


export default slice.reducer