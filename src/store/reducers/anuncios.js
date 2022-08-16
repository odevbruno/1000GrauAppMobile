import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import react, { useEffect, useState } from "react";
import { API_URL } from '@env'

const slice = createSlice({
    name: 'anuncios',
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
            state.loading = false
            state.data = null
            state.error = action.payload,
                state.sucess = false
        },
    }
})

const { fetchStarded, fetchSucess, fetchError } = slice.actions




export const fetchAnuncios = (filter = {}) => async (dispatch) => {

    const { filtro, access_token } = filter;


    console.log(access_token)

    try {
        dispatch(fetchStarded())
        const response = await fetch(`${API_URL}/getanuncios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+access_token
            },
            body: JSON.stringify(filtro),

        })

        const data = await response.json();
        console.log(data.error)

        return dispatch(fetchSucess(data));

    } catch (error) {
        return dispatch(fetchError(error.message))
    }
}

export default slice.reducer
