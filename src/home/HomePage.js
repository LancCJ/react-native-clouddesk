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
    Alert
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
            isShowToTop: false,
            dataSource: ds.cloneWithRows([]),
            modelDataSource: listModelData.data
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
                <TopBanner/>

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
                    {/*<ListView*/}
                        {/*contentContainerStyle={Css.listModels}*/}
                        {/*dataSource={this.state.modelDataSource}*/}
                        {/*renderRow={(rowData) => this.renderRowView(rowData,'models')}*/}
                        {/*enableEmptySections={true}*/}
                    {/*/>*/}
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
        </View>
    )
}

export default HomePage;