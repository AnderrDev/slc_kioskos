import { configureStore } from '@reduxjs/toolkit';
import kioscoReducer from './kioscoSlice';

export const store = configureStore({
    reducer: {
        kioscos: kioscoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
