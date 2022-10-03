import * as ActionTypesRedux from '../ActionsTypesRedux'

const showHIG = (state = true, action) => {
    switch (action.type) {
        case ActionTypesRedux.LOADHIG:
            return true;
        default:
            return state;
    }
}

export default showHIG