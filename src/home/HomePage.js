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
import PieChart from '../compo/Chart/PieChart'
import LineChart from '../compo/Chart/LineChart'

//模拟数据
var pieChartOptionJson=require('../data/PieChart.json')
var lineChartOptionJson=require('../data/LineChart.json')

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

                <TitleBar titleName="统计分析" titleColor="#E5471C"/>
                <View style={[Css.Chart,Css.CENTER_CONTAINER]}>
                    <PieChart chartWidth={Css.SCREEN_WIDTH/3} chartHeight={Css.SCREEN_WIDTH/2.5} option={pieChartOptionJson}/>
                    <LineChart chartWidth={Css.SCREEN_WIDTH/3*2} chartHeight={Css.SCREEN_WIDTH/2.5} option={lineChartOptionJson}/>
                </View>

                <TitleBar titleName="PSTORE "  titleColor="#427FAA"/>
                <TitleBar titleName="常用功能" titleColor="#81CB3B"/>
                <TitleBar titleName="新闻公告" titleColor="#FF9733"/>

            </ScrollView>
        </View>
    )
}

export default HomePage;