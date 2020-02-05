// import * as constant from './actionTypes'
import {fromJS} from 'immutable';
import * as constants from './constants';
// immutable库
const defaultState = fromJS({
    topicList: [],
    articalList: [],
    recommendList: [],
    writerList: [],
    articalPage: 1,
    showScroll: false
});

export default((state = defaultState, action)=>{
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articalList: fromJS(action.articalList),
                recommendList: fromJS(action.recommendList),
                writerList: fromJS(action.writerList)
            })
        case constants.DD_ARTICAL_LIST:
            return state.merge({
                articalList: state.get('articalList').concat(action.list),
                articalPage: action.nextPage
            })
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show)
        default:
            return state;
    }
})