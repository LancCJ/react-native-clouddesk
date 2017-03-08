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
import MailPage from './mail/MailPage'
import MailDetailPage from './mail/MailDetailPage'
import ExplainPage from './ExplainPage'

//业务功能界面
import PeopleSearchPage from './app/PeopleSearch/PeopleSearchPage'

//模拟数据

//第三方组件
import { Router, Scene ,ActionConst ,Modal} from 'react-native-router-flux';

//Redux
import { Provider } from 'react-redux';
import configureStore from './redux/store/index';
let store = configureStore();

class Root_BAK extends Component {
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
        <Provider store={store}>
            <Router onExitApp={this._backAndroidHandler}>
                <Scene key="modal" component={Modal} >
                    <Scene key="root">
                        <Scene key="Guide" component={Guide} title="导航页"  hideNavBar={true} initial={true}/>
                        <Scene key="LoginPage" component={LoginPage} title="登录页" hideNavBar={true} type={ActionConst.REPLACE}/>
                        <Scene key="HomePage" component={HomePage} title="首页" hideNavBar={true} type={ActionConst.REPLACE}/>
                        <Scene key="MailPage" component={MailPage} title="邮件列表页" hideNavBar={true} />
                        <Scene key="MailDetailPage" component={MailDetailPage} title="邮件详情页" hideNavBar={true} />

                        <Scene key="PeopleSearchPage" component={PeopleSearchPage} title="人员查询页" hideNavBar={true} />
                    </Scene>
                    <Scene key="ExplainPage" component={ExplainPage} title="引导说明页" />
                </Scene>
            </Router>
        </Provider>
    )
}

export default Root_BAK;