import * as ActionTypesRedux from '../ActionsTypesRedux'

const showFAQ = (state = true, action) => {
    switch (action.type) {
        case ActionTypesRedux.LOADFAQ:
            return true;
        default:
            return state;
    }
}

export default showFAQ