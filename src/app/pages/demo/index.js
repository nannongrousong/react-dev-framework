import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDemoData } from 'APP_ACTION/demo';
import { Button } from 'antd';
import { Load_User_Info } from 'APP_SERVICE/Demo';
import { errorHandle } from 'APP_UTILS/common';
import styles from 'APP_STYLES/page/demo.less';
import bigImg from 'APP_IMAGES/big.jpg';
class Index extends Component {
    state = {
        userInfo: null
    }

    handleAddData = () => {
        const { addDemoData } = this.props;
        const id = new Date().getTime();
        addDemoData({
            id: `id-${id}`,
            name: `name-${id}`,
            sex: 'man'
        });
    }

    handleMockData = () => {
        Load_User_Info().then((resData) => {
            const { Data } = resData;
            this.setState({
                userInfo: Data
            });
        }).catch(errorHandle);
    }

    render() {
        const { demoData } = this.props;
        const { userInfo } = this.state;

        return (
            <div style={{ padding: 20 }}>
                <div className={styles.header}>测试DEMO</div>
                {false && <img width={500} height={500} src={bigImg} />}

                <div>
                    <Button className='mb-16' onClick={this.handleAddData}>测试redux(查看console输出)</Button>
                    <h1>测试数据</h1>
                    <ul>
                        {
                            demoData.map(({ id, name, sex }, index) => (
                                <li key={index}>
                                    <h3>id:{id};name:{name};sex:{sex};</h3>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='mt-16'>
                    <Button onClick={this.handleMockData}>测试Mock(请以npm run start-mock运行)</Button>
                    <h1>用户信息</h1>
                    {
                        userInfo && <h3>登录名:{userInfo.loginName};角色:{userInfo.roleName}</h3>
                    }
                </div>
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