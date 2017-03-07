/**
 * Created by lanccj on 2017/3/5.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    InteractionManager
} from 'react-native';

//全局StyleSheet样式
import Css from '@config/Css'

//引入自定义组件

//模拟数据

//第三方组件
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux'


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render = () => (
        <View style={Css.navBarStyle}>
            <View style={Css.navBarContentStyle}>
                <View style={[Css.topIconStyles,{paddingLeft:Css.SCREEN_WIDTH*0.04}]}>
                    <TouchableOpacity onPress={()=>
                    InteractionManager.runAfterInteractions(() => {
                                                        // ...耗时较长的同步的任务...
                                                       Actions.pop()
                                                    })}>
                        <View>
                            <Icon color={'#FFFFFF'} name='ios-arrow-back-outline' size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
                {/**中间**/}
                <View>
                    <Text style={Css.topTextStyles}>{this.props.title}</Text>
                </View>
                {/**右边**/}
                <View style={[Css.topIconStyles,{paddingRight:Css.SCREEN_WIDTH*0.04}]}>
                    <TouchableOpacity>
                        <View>
                            <Icon color={'#FFFFFF'} name='ios-list-outline' size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default NavBar;