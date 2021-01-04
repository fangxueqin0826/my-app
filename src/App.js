/*
 * @Author: tiantian
 * @Date: 2020-12-29 17:16:04
 * @LastEditTime: 2021-01-04 17:38:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \house-evaluation-fed:\FXQ\my-app\src\App.js
 */
import './App.css';
import Route from './router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

function App() {
  moment.locale('zh-cn');
  return (
    <ConfigProvider locale={zhCN}>
      <Route />
    </ConfigProvider>
  )
}

export default App;


