import React, { PureComponent } from 'react';
import {RecommentWrapper, RecommentItem} from '../style';
import {connect} from 'react-redux';

class Recommend extends PureComponent {
    render() {
        return (
            <RecommentWrapper>
                {
                    this.props.list.map((item, index) => {
                        return <RecommentItem imgUrl={item.get('imgUrl')} key={index} />
                    })
                }
            </RecommentWrapper>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})
export default connect(mapState, null)(Recommend);