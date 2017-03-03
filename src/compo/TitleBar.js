/**
 * Created by lanccj on 2017/3/3.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView
} from 'react-native';

//全局StyleSheet样式
import Css from '../config/Css'

//第三方组件
import Icon from 'react-native-vector-icons/FontAwesome';
const arrowIcon = (<Icon name="user-o" size={Css.SCREEN_WIDTH*0.04} color="#F1F1F1"/>)

class TitleBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => (
        <View style={[Css.ROW_CONTAINER,Css.BottomLine,Css.TitleBar]}>
            <Text style={[Css.TitleBar_title]}>{this.props.titleName}    ></Text>
        </View>
    )
}

export default TitleBar;