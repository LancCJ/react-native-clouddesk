/**
 * Created by lanccj on 2017/3/5.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Platform,
    ToastAndroid
} from 'react-native';

//全局StyleSheet样式
import Css from '@config/Css'

//引入自定义组件
import Guide from './Guide'
import HomePage from './home/HomePage'
import LoginPage from './LoginPage'

//模拟数据

//第三方组件
import { Router, Scene ,ActionConst } from 'react-native-router-flux';

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    _backAndroidHandler=()=> {
        if (Platform.OS === 'android') {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                return false
            }
            this.lastBackPressed = Date.now()
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT)
            return true
        }else {
            return true
        }
    }

    render = () => (
        <Router onExitApp={this._backAndroidHandler}>
            <Scene key="root">
                <Scene key="Guide" component={Guide} title="导航页"  hideNavBar={true} initial={true}/>
                <Scene key="LoginPage" component={LoginPage} title="登录页" hideNavBar={true} type={ActionConst.REPLACE}/>
                <Scene key="HomePage" component={HomePage} title="首页页" hideNavBar={true} type={ActionConst.REPLACE}/>
            </Scene>
        </Router>
    )
}

export default Root;