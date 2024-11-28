import { configureStore } from '@reduxjs/toolkit'
import { updateAuth, updateRenovar } from '../features/auth/authSlice';


export default configureStore({
  reducer: {
    some: updateAuth, updateRenovar
  },
});
