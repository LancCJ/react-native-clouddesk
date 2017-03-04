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
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        // 相对位置，放置在容器正中间
        position: [0, 0],
        textStyle:{
            fontSize:'6'
        },
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        itemWidth:4,
        itemHeight:4,
        itemGap:0,
        textStyle:{
          fontSize:'6'
        },
        data:['重点人员','实有人口','出租房屋','流动人口','车查询']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['35%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '10',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:335, name:'重点人员'},
                {value:310, name:'实有人口'},
                {value:234, name:'出租房屋'},
                {value:135, name:'流动人口'},
                {value:1548, name:'车查询'}
            ]
        }
    ]
}

class PieChart extends Component {
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
        }, 1000);
    }

    render = () => (
        <View style={[Css.COLUMN_CONTAINER,Css.PieChart,Css.CENTER_CONTAINER]}>
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

export default PieChart;