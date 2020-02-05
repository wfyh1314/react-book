// import * as constant from './actionTypes'
import {fromJS} from 'immutable';
import * as constants from './constants';
// immutable库
const defaultState = fromJS({
    title: '',
    content: ''
});

export default((state = defaultState, action)=>{
    switch(action.type) {
        case constants.DETAIL_DATA:
            return state.merge({
                title: fromJS(action.title),
                content: fromJS(action.content)
            })
       
        default:
            return state;
    }
})