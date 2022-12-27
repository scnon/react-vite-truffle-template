import { configureStore } from '@reduxjs/toolkit';
import Wallet from './wallet';

const store = configureStore({
    reducer: {
        wallet: Wallet,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;