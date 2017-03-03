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

//引入自定义组件
import TopBanner from '../compo/TopBanner'
import TitleBar from '../compo/TitleBar'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => (
        <View style={[Css.COLUMN_CONTAINER]}>
            <StatusBar
                backgroundColor="transparent"
                barStyle="light-content"
                translucent={true}
            />
            <ScrollView>
                <TopBanner/>

                <TitleBar titleName="统计分析"/>
            </ScrollView>
        </View>
    )
}

export default HomePage;