import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";
import Update from "./Update";

const userSlice = createSlice({
    name : "users",
    initialState : userList ,
    reducers : {
            addUser : (state , action ) => {
               state.push(action.payload)
            } ,
            updateUser : (state , action ) => {
              const {id , name , email} = action.payload;
              const uu = state.find(user => user.id == id)
              if(uu){
                uu.name = name;
                uu.email = email;
              }
             }
    }
})

export const {updateUser } = userSlice.actions
export const {addUser} = userSlice.actions
export default userSlice.reducer;

