/**
 * Created by lanccj on 2017/3/4.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native';

//全局StyleSheet样式
import Css from '../../config/Css'

//引入自定义组件

//第三方组件
import Echarts from 'native-echarts';

const option = {
    title: {
        text: '工作量统计',
        textStyle:{
            fontSize:'6'
        },
        left:0,
        top:0,
        padding:0,
        itemGap:0,
        show:false
    },
    tooltip: {},
    legend: {
        bottom:0,
        right:0,
        itemWidth:4,
        itemHeight:4,
        itemGap:0,
        textStyle:{
            fontSize:'6'
        },
        data:['统计项1','统计项2','统计项3','统计项4','统计项5']
    },
    grid: {
        height:'80%',
        top:'10%',
        left:'1%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        data:['统计项1','统计项2','统计项3','统计项4','统计项5']
    },
    yAxis: {},
    series: [
        {
            name: '统计项1',
            type: 'bar',
            data: [335]
        },
        {
            name: '统计项2',
            type: 'bar',
            data: [310]
        },
        {
            name: '统计项3',
            type: 'bar',
            data: [234]
        },
        {
            name: '统计项4',
            type: 'bar',
            data: [135]
        },
        {
            name: '统计项5',
            type: 'bar',
            data: [1548]
        }
    ]
};

class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true
        };
    }

    componentDidMount=()=> {
        setInterval(() => {
            this.setState({
                isLoading: false
            });
        }, 2000);
    }

    render = () => (
        <View style={[Css.COLUMN_CONTAINER,Css.LineChart,Css.CENTER_CONTAINER,Css.lEFT_BORDER]}>
            {this.state.isLoading?(
                    <ActivityIndicator
                        animating={true}
                        style={[Css.simpleLoading, {height: 80}]}
                    />
                ):(
                    <Echarts option={option} height={this.props.chartHeight} width={this.props.chartWidth}/>
                )}
        </View>
    )
}

export default LineChart;