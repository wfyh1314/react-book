import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackToTop } from './style';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import {connect} from 'react-redux';
import { actionCreators } from './store';

class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt="" src="https://pic3.zhimg.com/v2-734619cc5ef1d649bc8085da89410b38_r.jpg"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                { this.props.showScroll ? <BackToTop onClick={this.handleScrollTop}>顶部</BackToTop> : null }
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents()
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    };

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}
const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action)
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 400) {
            const action = actionCreators.toggleTopShow(true);
            dispatch(action)
        } else {
            const action = actionCreators.toggleTopShow(false);
            dispatch(action)
        }
    }
});

export default connect(mapState, mapDispatch)(Home);