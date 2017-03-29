/**
 * Created by lanccj on 2017/3/3.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    ListView,
    Alert,
    InteractionManager
} from 'react-native';

//全局StyleSheet样式
import Css from '@config/Css'

//引入自定义组件
import TopBanner from '../compo/TopBanner'
import ListBanner from '../compo/ListBanner'
import TitleBar from '../compo/TitleBar'
import PieChart from '../compo/Chart/PieChart'
import LineChart from '../compo/Chart/LineChart'
import SwiperNews from '../compo/SwiperNews'
import RowDataView from '../compo/RowDataView'

//第三方组件
import ScrollTopView from 'react-native-scrolltotop';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import GridView from 'react-native-grid-view'
import { Actions } from 'react-native-router-flux'

//redux
import { connect } from 'react-redux';
import { weather,day,time} from '../redux/action/SystemAction.js';

//模拟数据
var pieChartOptionJson=require('../data/PieChart.json')
var lineChartOptionJson=require('../data/LineChart.json')
var listnNewsData=require('../data/listData.json')
var listModelData=require('../data/listModels.json')
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class HomePage extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var modelds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isShowGuide:true,
            isShowToTop: false,
            dataSource: ds.cloneWithRows([]),
            modelDataSource: listModelData.data,
        };
    }

    _onScroll=(e)=> {
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

    renderRowView=(rowData,type)=>{
        //console.log('渲染每行'+rowData.id)
        return(
            <RowDataView
                key={rowData.id}
                data={rowData}
                type={type}
            />
        )
    }

    componentDidMount=()=> {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(listnNewsData.data),
        });

        this.props.dispatch(weather());//获取天气城市

        this.props.dispatch(day());//获取日期

        this.interval = setInterval(
            () => {
                this.props.dispatch(time());//获取时间
            },
            1000
        );

        //TODO  引导
        //this.state.isShowGuide?(()=>Actions.ExplainPage()):(null)
    }

    componentWillUnmount=()=> {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.interval && clearInterval(this.interval);
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {

            })
            .done();
    }

    _actionButtonView=()=>{
        return (
            <Text>消息</Text>
        )
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
                <TopBanner weather={this.props.weather}  day={this.props.day}  time={this.props.time}/>

                <TitleBar titleName="数据统计" titleColor="#E5471C"/>
                <View style={[Css.Chart,Css.CENTER_CONTAINER]}>
                    <PieChart chartWidth={Css.SCREEN_WIDTH/3} chartHeight={Css.SCREEN_WIDTH/2.5} option={pieChartOptionJson}/>
                    <LineChart chartWidth={Css.SCREEN_WIDTH/3*2} chartHeight={Css.SCREEN_WIDTH/2.5} option={lineChartOptionJson}/>
                </View>

                <TitleBar titleName="快捷链接"  titleColor="#427FAA"/>
                <View style={[Css.listBanner]}>
                    <ListBanner/>
                </View>

                <TitleBar titleName="常用功能" titleColor="#81CB3B"/>
                <View>
                    <GridView
                        items={this.state.modelDataSource}
                        itemsPerRow={5}
                        renderItem={(rowData) => this.renderRowView(rowData,'models')}
                    />
                </View>

                <TitleBar titleName="新闻公告" titleColor="#FF9733"/>
                <View style={[Css.news]}>
                    <View style={[Css.swiperNews]}>
                        <SwiperNews/>
                    </View>
                    <ListView
                        style={[Css.listNews]}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this.renderRowView(rowData,'news')}
                        enableEmptySections={true}
                    />
                </View>

            </ScrollView>
            {this.state.isShowToTop?<ScrollTopView
                    root={this}
                ></ScrollTopView>:null}
            {/* Rest of the app comes ABOVE the action button component !*/}
            <ActionButton
                offsetX={22}
                icon={<Icon name="ios-mail-outline" color="#FFFFFF" size={30}/>}
                buttonStyle={{backgroundColor:'transparent'}}
                onPress={()=>Actions.MailPage()}
                buttonColor="#1B52EF">
            </ActionButton>
            {/*<View style={[{backgroundColor:"red",alignSelf:"flex-start",width:Css.SCREEN_WIDTH,height:Css.SCREEN_HEIGHT}]}>*/}
                {/*<Text>我是指引界面</Text>*/}
            {/*</View>*/}
        </View>
    )
}


export default connect(
    (store) => ({
        weather: store.systemStore.weather,
        day: store.systemStore.day,
        time: store.systemStore.time
    })
)(HomePage);


