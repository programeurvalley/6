import React, { useState } from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import SignIn from '../pages/Signin'
import SignUp from '../pages/Signup'

// Data
import { ABOUTCONTENT } from '../shared/AboutContent'
import {FAQ} from '../shared/FaqContent'
import {HighLights} from '../shared/HighLightContent' 
import Navbar from './Navbar'
import Footer from './Footer'
import {Routes , Route , Navigate} from 'react-router-dom'
import  {BrowserRouter} from 'react-router-dom'
import { createStore } from 'redux'
import Fc from './Redux/Fc'

// if you want to use the Old Method replace props.hig with it HighLights
// Other method useContext


/*
// ACTION 

const increament = () => {
    return {
        type : "INCENET"
    }
}


const decreament = () => {
    return {
        type : "DECREMENT"
    }
}

// REDUCER

const counter = (state = 0 , action) => {
    switch(action.type){
        case "INCEREMENT" :
            return state+1;
        case "DECREMENT" :
            return state-1;
        default :
            return state;
    }
}



// STORE

const store = createStore(counter);

// Display Store

store.subscribe()

// Dispatch Store

store.dispatch(increament())
store.dispatch(increament())
store.dispatch(increament())
store.dispatch(decreament())
store.dispatch(increament())
store.dispatch(decreament())
store.dispatch(decreament())

// Redux DevTools */

export default function Layout() {

        

    const [aboutcontent , setaboutcontent] = useState(ABOUTCONTENT)
    // const [faq , setfaq] = useState(FAQ)
    // const [hig , sethig] = useState(HighLights)

    return (
    <>
        <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='signin' element={<SignIn />} />
                    <Route path='signup' element={<SignUp />} />
                </Routes>
                <Footer />
        </BrowserRouter>

        {/*<Fc />*/}
        
    </>
    )
}
