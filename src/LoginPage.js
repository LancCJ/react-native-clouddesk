/**
 * Created by lanccj on 2017/3/5.
 */
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

//全局StyleSheet样式
import Css from '@config/Css'

//引入自定义组件
import NavBar from './compo/NavBar'

//第三方组件
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {
    Makiko
} from 'react-native-textinput-effects';
//模拟数据

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render = () => (
        <View style={[Css.COLUMN_CONTAINER,{ backgroundColor: '#40C6E9' }]}>
            <View style={[Css.login]}>
                <Text style={[Css.loginTitle]}>用户登录</Text>
                <Makiko
                    label={'用户名'}
                    iconClass={FontAwesomeIcon}
                    iconName={'heart'}
                    iconColor={'white'}
                    inputStyle={{ color: '#db786d' }}
                />
                <Makiko
                    style={Css.loginInput}
                    label={'密码'}
                    iconClass={FontAwesomeIcon}
                    iconName={'heart'}
                    iconColor={'white'}
                    inputStyle={{ color: '#db786d'}}
                />
            </View>
        </View>
    )
}

export default LoginPage;