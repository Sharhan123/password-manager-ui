// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState = {
  token: localStorage.getItem('token') || null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      
      state.token = action.payload;
    },
    logout(state) {
      state.token = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
