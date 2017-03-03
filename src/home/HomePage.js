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

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => (
        <View style={[Css.COLUMN_CONTAINER]}>
            <StatusBar
                barStyle="light-content"
                translucent={true}
            />
            <ScrollView>
                <TopBanner/>
            </ScrollView>
        </View>
    )
}

export default HomePage;