import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './Slice.js'

export let store = configureStore({
    reducer:{
        dataReducer
    }
})