import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articalList: result.articalList,
    recommendList: result.recommendList,
    writerList: result.writerList
})


export const addHomeList = (list, nextPage) => ({
    type: constants.DD_ARTICAL_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data
            const action = changeHomeData(result)
            dispatch(action)
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+page).then((res) => {
            const result = res.data.data
            dispatch(addHomeList(result, page + 1))
        })
    }
}
export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})