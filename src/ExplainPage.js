/**
 * Created by lanccj on 2017/3/5.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

//全局StyleSheet样式
import Css from '@config/Css'

//引入自定义组件

//模拟数据

//第三方组件
import { Actions } from 'react-native-router-flux'


class ExplainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render = () => (
            <View style={[Css.COLUMN_CONTAINER]}>
                <Image
                    style={[Css.explainPageImage]}
                    source={{uri: 'Guide'}}
                />
            </View>
    )
}

export default ExplainPage;