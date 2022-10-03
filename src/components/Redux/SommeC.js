import { useSelector , useDispatch } from "react-redux/es/exports"
import { increament , decreament , signIn , signOut } from "./Arch/Actions"

export function SommeCCounter() {

    const counter = useSelector(state => state.countReducer)
    const dispatch = useDispatch()

    return (
        <div>
            <h3>I'm sure first child components , I'm chared of setting the Counter</h3>
            <p>Counter : {counter}</p>
            <button onClick={() => dispatch(increament())}>increament</button>

            <button onClick={() => dispatch(decreament())}>decreament</button>
            <br/>
            
            
        </div>
    )
}

export function SommeCLogged() {

    const bool = useSelector(state => state.LoggedReducer)
    const dispatch = useDispatch()

    return (
        <>
            <h4>This : {(bool === false) ? 'No' : 'Yes'}</h4>
            <button onClick={() => dispatch(signIn())} >Sign In</button>
            <button onClick={() => dispatch(signOut())} >Sign out</button>
            {(bool === false) ? <></> : <h1>This is hide text only if true show Up</h1>}
        </>     
    )
}