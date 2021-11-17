import {createSlice} from "@reduxjs/toolkit";
const userSlice=createSlice({
name:"user",
initialState:{
 currentUser:null,
 isFetching:false,
 error:false
},
reducers:{
    loginStart:(state)=>{
        state.error=false;
        state.isFetching=true;
    },
    loginSuccess:(state,action)=>{
        state.isFetching=false;
        state.error=false;
        state.currentUser=action.payload;
    },
    loginFailure:(state)=>{
            state.isFetching=false;
            state.error=true;

    },
    logout:(state)=>{
        state.currentUser=null;
    },
//register
registerStart:(state)=>{
    state.error=false;
    state.isFetching=true;
},
registerSuccess:(state,action)=>{
    state.isFetching=false;
    state.error=false;
    state.currentUser=action.payload;
},
registerFailure:(state)=>{
        state.isFetching=false;
        state.error=true;

},

}
});
export const {loginStart,loginSuccess,loginFailure,logout,registerSuccess,registerStart,registerFailure}=userSlice.actions;
export default userSlice.reducer;
