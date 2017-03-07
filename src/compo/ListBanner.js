/**
 * Created by lanccj on 2017/3/4.
 */
import React, {Component} from 'react';
import {
    View
} from 'react-native';

//全局StyleSheet样式
import Css from '../config/Css'

//引入自定义组件

//引入第三方组件
import BannerLite from './BannerLite';

//模拟数据

class ListBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => (
        <View style={[Css.COLUMN_CONTAINER]}>
            <BannerLite
                items={[
                        {
                          imageURL: "link1",
                          onPress:(index)=>{console.log("tap"+index)}
                        },
                        {
                          imageURL: "link2",
                          onPress:(index)=>{console.log("tap"+index)}
                        },
                        {
                          imageURL: "link1",
                          onPress:(index)=>{console.log("tap"+index)}
                        },
                        {
                          imageURL: "link2",
                          onPress:(index)=>{console.log("tap"+index)}
                        },
                        {
                          imageURL: "link1",
                          onPress:(index)=>{console.log("tap"+index)}
                        },
                        {
                          imageURL: "link2",
                          onPress:(index)=>{console.log("tap"+index)}
                        },
                      ]}
            />
        </View>
    )
}

export default ListBanner;