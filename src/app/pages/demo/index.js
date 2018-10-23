import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDemoData } from 'APP_ACTION/demo';
import { Button } from 'antd';

class Index extends Component {
    handleAddData = () => {
        const { addDemoData } = this.props;
        const id = new Date().getTime();
        addDemoData({
            id: `id-${id}`,
            name: `name-${id}`,
            sex: 'man'
        });
    }

    render() {
        const { demoData } = this.props;

        return (
            <div>
                <Button onClick={this.handleAddData}>测试添加数据</Button>

                <h1>测试数据</h1>

                <ul>
                    {
                        demoData.map(({id, name, sex}, index) => (
                            <div key={index}>
                                <span>id:{id};</span>
                                <span>name:{name};</span>
                                <span>sex:{sex}</span>
                            </div>
                        ))
                    }

                </ul>
            </div>
        );
    }
}

Index.propTypes = {
    addDemoData: PropTypes.func,
    demoData: PropTypes.array
};

Index = connect(
    (state) => ({
        demoData: state.demo
    }),
    {
        addDemoData
    }
)(Index);
export default Index;