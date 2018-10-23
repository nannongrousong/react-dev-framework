import { message } from 'antd';

/**
 * 统一错误处理
 * @param {Error对象or字符串} err 
 */
export const errorHandle = err => {
    if (err.__proto__ == Error.prototype) {
        message.error(err.message);
    } else {
        message.error(err);
    }
    console.log(err);
};
