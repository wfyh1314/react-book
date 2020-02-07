import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as homeReducer} from '../pages/home/store'
import {reducer as detailRducer} from '../pages/detail/store'
import {reducer as loginReducer} from '../pages/login/store'

const reducer =  combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailRducer,
    login: loginReducer
})
export default reducer