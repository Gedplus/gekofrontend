
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


import { blogService } from "./blogService";



 export const getAllBlogs = createAsyncThunk(
    "blog/get", async(thunkAPI) =>{

try{
return await blogService.getBlogs()
}

        catch(error){
return thunkAPI.rejectWithValue(error)
        }
    }

 )
 export const getABlogs = createAsyncThunk(
    "blog/get-blog", async(id,thunkAPI) =>{

try{
return await blogService.getBlog(id)
}

        catch(error){
return thunkAPI.rejectWithValue(error)
        }
    }

 )



 const blogState = {
    blog:[],
    singleBlog:"",
    isError:false,
    isSuccess:false,
    isLoading: false,
    message:""
 }

  export const blogSlice = createSlice ({
    name:"blog",
    initialState: blogState,
    reducers:[],
    extraReducers:(builder) => (
        builder.addCase(getAllBlogs.pending,(state)=>{
            state.isLoading = true;
        }).addCase(getAllBlogs.fulfilled,(state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.blog = action.payload;
         
        }).addCase(getAllBlogs.rejected,(state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
          
        }).addCase(getABlogs.pending,(state)=>{
            state.isLoading = true;
        }).addCase(getABlogs.fulfilled,(state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.singleBlog = action.payload;
         
        }).addCase(getABlogs.rejected,(state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
          
        })
    )
  })


  export default blogSlice.reducer;