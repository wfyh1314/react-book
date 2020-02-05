import React, { PureComponent } from 'react';
import {WriterWrapper, WriterItem, WriterInfo} from '../style';
import {connect} from 'react-redux';

class Writer extends PureComponent {
    render() {
        return (
            <WriterWrapper>
                {
                    this.props.list.map((item) => {
                        return (
                            <WriterItem key={item.get('id')}>
                                <img className="pic" src={item.get('imgUrl')} alt="" />
                                <WriterInfo>
                                    <h3 className="name">{item.get('name')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </WriterInfo>
                            </WriterItem>
                        )
                    })
                }
                
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writerList'])
})
export default connect(mapState, null)(Writer);