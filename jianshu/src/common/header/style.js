import styled from 'styled-components';
import logoPic from '../../statics/nav-logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a`
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic}) no-repeat center;
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
`
export const Nav = styled.div`
    width:960px;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
    height: 100%;
`
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    font-size: 14px;
    border-radius: 19px;
    background: #eee;
    margin-top: 9px;
    padding-left: 10px;
    box-sizing: border-box;
    margin-left: 20px;
    &::placeholder {
        color: #999;
    }
`
export const Addtion = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`
export const Button = styled.button`
    float: right;
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    border: 1px solid #ec6149;\
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`