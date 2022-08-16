import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from '@env';


const slice = createSlice({
    name: 'registerUsers',
    initialState: {
        sucess: false,
        loading: false,
        data: null,
        error: null,
    },
    reducers: {
        fetchStarded(state, action) {
            state.loading = true,
                state.sucess = false,
                state.error = action.payload
        },
        fetchSucess(state, action) {
            state.loading = false,
                state.data = action.payload,
                state.sucess = true,
                state.error = null
        },
        fetchError(state, action) {
            state.loading = false
            state.data = null
            state.error = action.payload,
                state.sucess = false
        },
        resetState(state) {
            state.loading = false,
                state.data = null,
                state.error = null
        }
    }
})

const { fetchStarded, fetchSucess, fetchError, resetState: resetUserStateRegister } = slice.actions


export const userLogoutRegister = (act) => async (dispatch) => {
    dispatch(fetchStarded(act))
}

export const fetchRegister = (user) => async (dispatch) => {


    try {
        dispatch(fetchStarded())

        const response = await fetch(`${API_URL}/create-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const data = await response.json()


        //validar retorno de forma diferente
        if (data.error == "success") {
            return dispatch(fetchSucess(data))
        } else {
            dispatch(fetchError(data.detail))
        }
    } catch (error) {

        return dispatch(fetchError(error.message))
    }
}

export default slice.reducer