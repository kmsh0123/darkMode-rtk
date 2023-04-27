import { configureStore } from '@reduxjs/toolkit';
import darkModeSlice from '../feature/darkModeSlice';

export const store = configureStore({
    reducer : {
        darkMode : darkModeSlice
    }
})