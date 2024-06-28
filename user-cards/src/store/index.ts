
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './aut';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
