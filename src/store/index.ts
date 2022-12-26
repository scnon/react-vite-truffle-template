import { configureStore } from '@reduxjs/toolkit';
import Provider from './provider';

const store = configureStore({
    reducer: {
        provider: Provider,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;