/**
 * Created by lanccj on 2017/3/3.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';

//全局StyleSheet样式
import Css from '../config/Css'
//全局静态资源请求地址
import StaticImage from '../config/StaticImage'

//第三方组件
import Icon from 'react-native-vector-icons/FontAwesome';
const userIcon = (<Icon name="user-o" size={Css.SCREEN_WIDTH*0.04} color="#F1F1F1"/>)
const searchIcon = (<Icon name="search" size={Css.SCREEN_WIDTH*0.05} color="#6F6E6A"/>)


class TopBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => (
        <View style={[Css.COLUMN_CONTAINER]}>
            <Image
                source={{uri: StaticImage.TopBanner_BACKGROUND}}
                style={Css.TopBanner_BACKGROUND}
            >

                <View style={[Css.TopBanner_Info]}>
                    {/*<Image*/}
                        {/*source={{uri: StaticImage.TopBanner_LOGO}}*/}
                        {/*style={Css.TopBanner_LOGO}*/}
                    {/*/>*/}
                    <Text style={[Css.TopBanner_AppName]}>APP NAME</Text>
                    {userIcon}
                    <Text style={[Css.TopBanner_User]}>你好!小帅哥</Text>
                </View>

                <View style={[Css.TopBanner_WeatherTime]}>
                    <View style={[Css.TopBanner_WeatherTime_LEFT]}>
                        <Text style={[Css.TopBanner_TIME]}>14:28</Text>
                        <Text style={[Css.TopBanner_DAY]}>2017年03月03日 周五</Text>
                    </View>
                    <View style={[Css.TopBanner_WeatherTime_RIGHT]}>
                        <View style={[Css.TopBanner_WeatherTime_RIGHT_TOP]}></View>
                        <View style={[Css.TopBanner_WeatherTime_RIGHT_BOTTOM]}>
                            <Text style={[Css.TopBanner_TEMPERATURE]}>{this.props.weather.temperature}</Text>
                            <View>
                                <Text style={[Css.TopBanner_LOCATION]}>{this.props.weather.city}</Text>
                                <Text style={[Css.TopBanner_WEATHER]}>{this.props.weather.airpollution}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[Css.TopBanner_Search]}>
                    <TextInput
                        style={[Css.TopBanner_SearchInput,{fontSize:10}]}
                        placeholder="搜索相关APP或网页"
                        //placeholderTextColor="#DEDEDE"
                        textAlignVertical="center"
                        underlineColorAndroid='transparent'
                        includeFontPadding={false}
                    />
                    <TouchableOpacity onPress={()=>Alert.alert('进行搜索')}>
                        {searchIcon}
                    </TouchableOpacity>
                </View>
            </Image>
        </View>
    )
}

export default TopBanner;