/**
 * Created by lanccj on 2017/3/6.
 */
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

//全局StyleSheet样式
import Css from '@config/Css'

//引入自定义组件
import NavBar from '../../compo/NavBar'


//模拟数据

//第三方组件

class PeopleSearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render = () => (
        <View style={[Css.COLUMN_CONTAINER]}>
            <NavBar title="人 员 查 询"/>

            <Text>人员查询</Text>
        </View>
    )
}

export default PeopleSearchPage;