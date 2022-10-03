import showAC from "./LoadAC"
import showFAQ from "./LoadFAQ"
import showHIG from "./LoadHIG"

import {combineReducers} from 'redux'

const totalReducers = combineReducers({
    showAC ,
    showFAQ ,
    showHIG
})

export default totalReducers