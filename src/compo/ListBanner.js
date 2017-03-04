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
                          imageURL: "http://h.hiphotos.baidu.com/image/h%3D200/sign=3a225a4129a4462361caa262a8227246/30adcbef76094b36fbaf3bd6aacc7cd98d109dcf.jpg",
                          onPress:(index)=>{console.log("tap"+index)}
                        },
                        {
                          imageURL: "http://a4.att.hudong.com/35/64/01300000276819133197645554930.jpg",
                          onPress:(index)=>{console.log("tap"+index)}
                        },
                        {
                          imageURL: "http://pic69.nipic.com/file/20150610/21067407_235515103000_2.jpg",
                          onPress:(index)=>{console.log("tap"+index)}
                        },
                        {
                          imageURL: "http://h.hiphotos.baidu.com/image/h%3D200/sign=3a225a4129a4462361caa262a8227246/30adcbef76094b36fbaf3bd6aacc7cd98d109dcf.jpg",
                          onPress:(index)=>{console.log("tap"+index)}
                        },
                        {
                          imageURL: "http://a4.att.hudong.com/35/64/01300000276819133197645554930.jpg",
                          onPress:(index)=>{console.log("tap"+index)}
                        },
                        {
                          imageURL: "http://pic69.nipic.com/file/20150610/21067407_235515103000_2.jpg",
                          onPress:(index)=>{console.log("tap"+index)}
                        },
                      ]}
            />
        </View>
    )
}

export default ListBanner;