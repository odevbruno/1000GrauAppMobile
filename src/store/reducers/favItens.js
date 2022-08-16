import { ADD_TO_LIST, REMOVE_TO_LIST } from '../constants/';

const favItens = (state = [], action) => {

    switch (action.type) {
        case ADD_TO_LIST:
            return [...state, action.payload]

        case REMOVE_TO_LIST:
            return state = []
    }


    return state;
}

export default favItens;
