import * as constant from './actionTypes'
import {fromJS} from 'immutable'
// immutable库
const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
});

export default((state = defaultState, action)=>{
    switch(action.type) {
        // immutable对象的set方法回结合之前immutable对象的值
        // 和设置的值，返回一个全新的对象
        case constant.SEARCH_FOCUS :
            return state.set('focused', true);
        case constant.SEARCH_BLUR :
            return state.set('focused', false);
        case constant.CHANGRE_LIST :
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
            // state.set('list', action.data).set('totalPage', action.totalPage);
        case constant.MOUSE_ENTER :
            return state.set('mouseIn', true);
        case constant.MOUSE_LEAVE :
            return state.set('mouseIn', false);
        case constant.CHANGE_PAGE :
            return state.set('page', action.page);
        default:
            return state;
    }
})