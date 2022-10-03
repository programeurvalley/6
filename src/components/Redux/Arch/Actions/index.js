import * as ActionTypes from '../ActionTypes'

export const increament = () => {
    return {
        type : ActionTypes.INCEREMENT
    }
}


export const decreament = () => {
    return {
        type : ActionTypes.DECREMENT
    }
}

export const signIn = () => {
    return {
        type : ActionTypes.SIGN_IN
    }
}

export const signOut = () => {
    return {
        type : ActionTypes.SIGN_OUT
    }
}
