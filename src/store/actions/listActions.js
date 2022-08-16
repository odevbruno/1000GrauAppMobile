import { ADD_TO_LIST, REMOVE_TO_LIST } from "../constants";

export const addLista = (payload) => {
    
    return{
        type: ADD_TO_LIST,
        payload
    }

}

export const limpaLista = () =>{
    return{
        type: REMOVE_TO_LIST
    }
}