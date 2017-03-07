/**
 * Created by lanccj on 2017/3/5.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Alert,
    TouchableOpacity
} from 'react-native';

//全局StyleSheet样式
import Css from '@config/Css'

//引入自定义组件

//第三方组件
import { FormLabel, FormInput,Button ,FormValidationMessage} from 'react-native-elements'

//redux
import { connect } from 'react-redux';
import { login} from './redux/action/LoginAction';

//模拟数据

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            userpwd:''
        };
    }

    getUserpwd=(userpwd)=>{
        this.setState({
            userpwd:userpwd
        })
        console.log(this.state.userpwd)
    }


    getUsername=(usename)=>{
        this.setState({
            usename:usename
        })
        console.log(this.state.username)
    }

    componentDidMount=()=> {
        //console.log(this.props.user.loginState)
    }

    render = () => (
        <View style={[Css.COLUMN_CONTAINER,{ backgroundColor: '#40C6E9' }]}>
            <View style={[Css.login]}>
                <Text style={[Css.loginTitle]}>用户登录</Text>
                <FormLabel
                    labelStyle={{
                        color:'#FFFFFF'
                    }}
                >用户名</FormLabel>
                <FormInput
                    placeholder="    输入用户名/邮箱/手机号"
                    placeholderTextColor="#F2F2F2"
                    onChangeText={(usename)=>this.getUsername(usename)}
                />
                <FormLabel
                    labelStyle={{
                        color:'#FFFFFF'
                    }}
                >密码</FormLabel>
                <FormInput
                    secureTextEntry={true}
                    placeholder="    输入密码"
                    placeholderTextColor="#F2F2F2"
                    onChangeText={(userpwd)=>this.getUserpwd(userpwd)}
                />
                <FormValidationMessage>{this.props.user.loginMsg}</FormValidationMessage>
                <Button
                    raised
                    icon={{name: 'cached'}}
                    title='用户登录'
                    color='#FFFFFF'
                    backgroundColor="#FF9800"
                    buttonStyle={{
                        marginTop:5,
                    }}
                    onPress={()=>this.props.dispatch(login(this.state.username,this.state.userpwd))}
                />

                <View style={[Css.loginPageProblems]}>
                    <TouchableOpacity onPress={()=>Alert.alert('跳转')}>
                        <Text style={[Css.loginPageText]}>登录遇到问题?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>Alert.alert('跳转')}>
                        <Text style={[Css.loginPageText]}>密码找回</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}


export default connect(
    (store) => ({
        user: store.loginStore.user,
    })
)(LoginPage);


