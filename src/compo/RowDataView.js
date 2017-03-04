/**
 * Created by lanccj on 2017/3/4.
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

class RowDataView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render = () => (
            this.props.type==='news'?(
                    <View style={[Css.COLUMN_CONTAINER,{borderBottomColor:'#F2F2F2',borderBottomWidth:2,padding:Css.SCREEN_WIDTH*0.01}]}>
                        <View style={[Css.ROW_CONTAINER]}>
                            <View style={[Css.listNewsRowContent]}>
                                <Text style={[{flex:2,marginLeft:Css.SCREEN_WIDTH*0.04}]} numberOfLines={1}>{this.props.data.title}</Text>
                                <Text style={[{flex:4,color:'#6F6E6A'}]} numberOfLines={3}>    {this.props.data.content}</Text>
                                <View style={[Css.ROW_CONTAINER,{flex:1,justifyContent:'flex-end'}]}>
                                    <Text style={[{fontSize:Css.SCREEN_WIDTH*0.02}]}>{this.props.data.time}</Text>
                                    <Text style={[{fontSize:Css.SCREEN_WIDTH*0.02}]}>阅读({this.props.data.read})</Text>
                                </View>
                            </View>
                            <Image
                                style={[Css.listNewsRowImage]}
                                source={{uri: this.props.data.thumbnail}}
                            />
                        </View>
                    </View>
                ):(
                    <View style={Css.innerViewStyle}>
                        <Image source={{uri:this.props.data.thumbnail}} style={Css.iconStyle}/>
                        <Text style={[{color:'#6F6E6A',fontSize:8,marginTop:5}]}>{this.props.data.title}</Text>
                    </View>
                )
    )
}

export default RowDataView;