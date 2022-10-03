import * as ActionTypesRedux from '../ActionsTypesRedux'

const showAC = (state = true, action) => {
    switch (action.type) {
        case ActionTypesRedux.LOADAC:
            return true;
        default:
            return state;
    }
}

export default showAC;