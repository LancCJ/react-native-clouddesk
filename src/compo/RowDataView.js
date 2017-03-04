/**
 * Created by lanccj on 2017/3/4.
 */
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

//全局StyleSheet样式
import Css from '@config/Css'

//引入自定义组件

//模拟数据

//第三方组件

class RowDataView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render = () => (
        <View style={[Css.COLUMN_CONTAINER]}>
            {this.props.type==='news'?(
                    <View>
                        <View style={[Css.listNewsRowContent]}>
                            <Text>标题</Text>
                            <Text>新闻内容</Text>
                            <View>
                                <Text>2017-03-04 22:05:09</Text>
                                <Text>阅读(1149)</Text>
                            </View>
                        </View>
                        <Image
                            style={[Css.listNewsRowImage]}
                        />
                    </View>
                ):(
                    <Text>功能模块</Text>
                )}
        </View>
    )
}

export default RowDataView;