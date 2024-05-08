import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser:null,
    loading:false,
    error:null
  }


  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        successLoading:(state)=>{
            state.loading=true;
            state.error=null
        },
        successStart:(state,action)=>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null;
        },
        successFaliure:(state,action)=>{
            state.currentUser=null;
            state.error=action.payload;
            state.loading=false;
        },
        signOut:(state,action)=>{
            state.currentUser=null;
            state.error=null;
            state.loading=false;
        }
    },
  })

  export const { successStart,successLoading,successFaliure,signOut } = authSlice.actions;
  export default authSlice.reducer;

  