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
        data:['重点人员','实有人口','出租房屋','流动人口','车查询']
    },
    grid: {
        height:'80%',
        top:'10%',
        left:'1%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        data:['重点人员','实有人口','出租房屋','流动人口','车查询']
    },
    yAxis: {},
    series: [
        {
            name: '重点人员',
            type: 'bar',
            data: [335]
        },
        {
            name: '实有人口',
            type: 'bar',
            data: [310]
        },
        {
            name: '出租房屋',
            type: 'bar',
            data: [234]
        },
        {
            name: '流动人口',
            type: 'bar',
            data: [135]
        },
        {
            name: '车查询',
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