import * as ActionTypes from '../ActionTypes'

const countReducer = (state = 0 , action) => {
    switch (action.type) {
        case ActionTypes.INCEREMENT:
            return state+1;
        case ActionTypes.DECREMENT:
            return state-1;
        default:
            return state;
    }
}

export default countReducer