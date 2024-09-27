import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice';

export default configureStore({
  reducer: {
    some: authSlice,  // Añade tu reducer aquí
  },
});
