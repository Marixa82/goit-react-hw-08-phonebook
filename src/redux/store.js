import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { contactsReducer } from './contacts/createSlice';
import authReducer from './auth/auth-slice';
import storage from 'redux-persist/lib/storage';


const authPersistConfig = {
    key: 'auth',
    storage,
    whiteList: ['token']
}
export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        auth: persistReducer(authPersistConfig, authReducer),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,],

            },
        }),
});
export const persistor = persistStore(store);

