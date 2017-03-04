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
import ListBanner from '../compo/ListBanner'
import TitleBar from '../compo/TitleBar'
import PieChart from '../compo/Chart/PieChart'
import LineChart from '../compo/Chart/LineChart'

//模拟数据
var pieChartOptionJson=require('../data/PieChart.json')
var lineChartOptionJson=require('../data/LineChart.json')

//第三方组件
import ScrollTopView from 'react-native-scrolltotop';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowToTop: false,
        };
    }

    _onScroll(e) {
        var offsetY = e.nativeEvent.contentOffset.y;

        if(offsetY > 100) {
            this.setState({
                isShowToTop: true
            })
        } else {
            this.setState({
                isShowToTop: false
            })
        }
    }

    render = () => (
        <View style={[Css.COLUMN_CONTAINER]}>
            <StatusBar
                backgroundColor="transparent"
                barStyle="light-content"
                translucent={true}
            />
            <ScrollView
                ref="listview"
                onScroll={(e)=>this._onScroll(e)}
            >
                <TopBanner/>

                <TitleBar titleName="统计分析" titleColor="#E5471C"/>
                <View style={[Css.Chart,Css.CENTER_CONTAINER]}>
                    <PieChart chartWidth={Css.SCREEN_WIDTH/3} chartHeight={Css.SCREEN_WIDTH/2.5} option={pieChartOptionJson}/>
                    <LineChart chartWidth={Css.SCREEN_WIDTH/3*2} chartHeight={Css.SCREEN_WIDTH/2.5} option={lineChartOptionJson}/>
                </View>

                <TitleBar titleName="PSTORE "  titleColor="#427FAA"/>
                <View style={[Css.listBanner]}>
                    <ListBanner/>
                </View>

                <TitleBar titleName="常用功能" titleColor="#81CB3B"/>

                <TitleBar titleName="新闻公告" titleColor="#FF9733"/>

            </ScrollView>
            {this.state.isShowToTop?<ScrollTopView
                    root={this}
                ></ScrollTopView>:null}
        </View>
    )
}

export default HomePage;