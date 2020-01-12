import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {actionCreator} from './store'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  SearchWrapper,
  Addtion,
  Button
} from './style'

class Header extends Component {
  getListArea() {
    const { focused, list, page, totalPage, mouseIn,handleChangePage } = this.props
    const newList = list.toJS();
    const pageList = [];
    console.log(newList.length)
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        console.log(newList[i])
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if(focused || mouseIn){
      return (
        <SearchInfo 
          onMouseEnter={this.props.handleEnter}
          onMouseLeave={this.props.handleLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch 
              onClick={() => handleChangePage(page, totalPage)}>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
    return (
      <HeaderWrapper>
        <Logo href="/"/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe601;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide">
              <NavSearch 
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe608;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addtion>
          <Button className="writting"><i className="iconfont">&#xe734;</i>写文章</Button>
          <Button className="reg">注册</Button>
        </Addtion>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'), // 使用了immutable库
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = actionCreator.searchFocus()
      dispatch(actionCreator.getList())
      dispatch(action)
    },
    handleInputBlur() {
      const action = actionCreator.searchBlur()
      dispatch(action)
    },
    handleEnter() {
      dispatch(actionCreator.mouseEnter())
    },
    handleLeave() {
      dispatch(actionCreator.mouseLeave())
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreator.changePage(page + 1))
      } else {
        dispatch(actionCreator.changePage(1))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header)