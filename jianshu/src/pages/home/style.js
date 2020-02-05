import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;
export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    background: #f7f7f7;
    font-size: 14px;
    color: #333;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    .topic-pic {
        vertical-align: top;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999
    }
`;

export const RecommentWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`
export const RecommentItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`
export const WriterWrapper = styled.div`
    
`
export const WriterItem = styled.div`
    overflow: hidden;
    margin-top: 15px;
    .pic {
        width: 48px;
        height: 48px;
        border: 1px solid #ddd;
        border-radius: 50%;
        float: left;
    }
`
export const WriterInfo = styled.div`
    float: left;
    margin-left: 10px;
    padding-top: 5px;
    .name {
        margin-right: 60px;
        font-size: 14px;
        display: block;
    }
    .desc {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    margin: 30px 0;
`
export const BackToTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
`
