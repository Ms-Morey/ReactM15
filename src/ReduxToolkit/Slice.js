import { createSlice } from "@reduxjs/toolkit";

// Async thunk
// export const fetchData = createAsyncThunk('data/fetch', async ()=>{
//     const res = await fetch('https://api.github.com/users')
//     return res.json()
// })

let dataSlice = createSlice({
    name:'data',
    initialState : {items:[], loading:false},
    reducers : {
        inc : (state, action)=>{return 'updated state'},
        addNewData : (state, action)=>{return }
    },
    // extraReducers : (builder)=>{
    //     builder
    //     .addCase(fetchData.pending, (state)=>{
    //         state.loading = true
    //     })
    //     .addCase(fetchData.fulfilled, (state, action)=>{
    //         state.loading = false
    //         state.items = action.payload
    //     })
    //     .addCase(fetchData.rejected, (state)=>{
    //         state.loading = true
    //     })
    // }

})


export let {inc, dec} = dataSlice.reducer
export default dataSlice.reducer

// Redux toolkit is centralized state management tool.
// Redux toolkit offers shorter syntax for managing the state compared with the previous redux versions
// It consist of 2 important things , slice and store.
// Slice :-> Slice offers you the place to define and manage the state. with the help of reducer functions.
//          We can create multiple slices and even multiple reducer functions inside each slice.
//          createSlice()
//          Syntax : ...syntax
//          All the reducers functions and extra reducers gets the default arguments of current state and action(object)
// Current State = It is the current state which we will use inside the reducer function , based on it  
//                we'll create new state object and we have to return newly created updated state, from the reducer function

// Store :-> store holds all the information about multiple available slices.
//          Component will dispatch an action , the action will come into the store, will be forwarded to 
//          respective slice , In that slice reducers will be called based on the action , It can also use
//          the payload into an action object. reducers will update the state, updated state will be given to the 
//          store and updated state will be available into component with the help of use selector hook

// useSelector() Hook :-> It is used to access the current state 
//                        Syntax : let data = useSelector((state)=>{return state.dataReducer})
//                        It behaves as an getter method.
//                       useSelector() hook is an higher order function, which takes another function as an argument
//                       and passes the access of current state as an argument to the callback function

// useDistpatch() HOOK :->  It is the hook used for dispatching the action from any of the component.
//                      syntax : let dispatch = useDispatch()
//                          on cliking we can dispatch any action , we'll dispatch it inside a payload
//                      onlClick = {(e)=>{
//                      e.preventDefault()
//                              dispatch(addNewData(state))
//                       }} 
//                      It is similar to the setter method


// *To have the access of the state in throughout the application we have to make/Provide created store to
// *entire application 
// 
//createRoot(document.getElementById("root")).render(
//  *<Provider store={store}>
//    <App />
//  </Provider>
//);