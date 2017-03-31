/**
 * Created by lanccj on 2017/3/4.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    InteractionManager
} from 'react-native';

//全局StyleSheet样式
import Css from '@config/Css'

//引入自定义组件

//模拟数据

//第三方组件
import SplashScreen from 'react-native-splash-screen'
import AppIntro from 'react-native-app-intro';
import { Actions } from 'react-native-router-flux'

class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount=()=> {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    }
    onSkipBtnHandle = (index) => {
        //Alert.alert('Skip');
        //console.log(index);
            // ...耗时较长的同步的任务...
            Actions.ExplainPage()

    }
    doneBtnHandle = () => {
        //Alert.alert('Done');
            Actions.LoginPage()

    }
    nextBtnHandle = (index) => {
        Alert.alert('Next');
        //console.log(index);
    }
    onSlideChangeHandle = (index, total) => {
        //console.log(index, total);
    }
    render() {
        return (
            <AppIntro
                onNextBtnClick={this.nextBtnHandle}
                onDoneBtnClick={this.doneBtnHandle}
                onSkipBtnClick={this.onSkipBtnHandle}
                onSlideChange={this.onSlideChangeHandle}
                doneBtnLabel="登录"
                skipBtnLabel="跳过"
            >
                    <View style={[Css.welcomeSlide]}  level={10}>
                        <Image
                            style={[{width:Css.SCREEN_WIDTH,height:Css.SCREEN_HEIGHT,resizeMode:'cover'}]}
                            source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489247128&di=9e10a35471e0321ca86a0a5d0abb00fe&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ca90555c698f0000009c5055be80.jpg'}}
                        />
                    </View>
                    <View style={[Css.slide]} level={10}>
                        <Image
                            style={[{width:Css.SCREEN_WIDTH,height:Css.SCREEN_HEIGHT,resizeMode:'cover'}]}
                            source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489247128&di=9e10a35471e0321ca86a0a5d0abb00fe&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ca90555c698f0000009c5055be80.jpg'}}
                        />
                    </View>
            </AppIntro>
        );
    }
}

export default Guide;