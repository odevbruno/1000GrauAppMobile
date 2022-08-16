import { configureStore, combineReducers } from '@reduxjs/toolkit';
import login from './reducers/users';
import registerUsers from './reducers/registerUsers';
import anuncios from './reducers/anuncios';
import favItens from './reducers/favItens';



const reducer = combineReducers({
    login,
    anuncios,
    registerUsers,
    favItens: favItens
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: { ignoredPaths: ['some.nested.path'] },
        serializableCheck: { ignoredPaths: ['some.nested.path'] }
    })
});