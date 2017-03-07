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
    //animation:false,
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
    xAxis : [
        {
            data : ['统计项1','统计项2','统计项3','统计项4','统计项5'],
            axisLabel:{
                textStyle: {
                    fontSize: 6  //刻度大小
                }
            }
        }
    ],
    yAxis: {},
    series: [
        {
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390]
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
        this.setState({
            isLoading: false
        });
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