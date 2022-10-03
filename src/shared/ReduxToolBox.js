// install npm install @reduxjs/toolkit
// #CreateFolder : Redux > Slices && configureStore.js
// In configureStore.js 

/* 
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {

    },
}) */

// In Index.js 

/* 
import { store } from './redux/configureStore.js'
import { Provider } from 'react-redux'

<Provider store={store}>
    <App />
</Provider>
*/

// CreateFile Slices> counter.js && logged.js

// In counter 

/*

    import { createSlice } from '@reduxjs/toolkit'

    const initialState = {
    value: 0,
    }

    export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
        },
        decrement: (state) => {
        state.value -= 1
        },
        incrementByAmount: (state, action) => {
        state.value += action.payload
        },
    },
    })

    // Action creators are generated for each case reducer function
    export const { increment, decrement, incrementByAmount } = counterSlice.actions

    export default counterSlice.reducer

*/




