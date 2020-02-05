import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';

const changeDetailData = (result) =>({
    type: constants.DETAIL_DATA,
    title: fromJS(result.title),
    content: fromJS(result.content)
})
export const getDetail = (id) => {
    return dispatch => {
        axios.get('/api/detail.json?id=' +id).then((res)=>{
            const result = res.data.data
            const action = changeDetailData(result)
            dispatch(action)
        })
    }
}