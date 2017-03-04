/**
 * 样式全局控制
 */

import Dimensions from 'Dimensions';
var {width,height}=Dimensions.get('window')
var bannerHeight=height/3
var chartHeight=width/2.5
var newsHeight=height/8

//一些常量设置
var cols = 5; //一行几个cell
var cellWH = 40; //cell的宽高
var vMargin = (width - cellWH * cols)/ (cols + 1); //cell之间的边距
var hMargin = 20;

const CSS = {
    /************************全局共用位置控制***********************************/
    SCREEN_WIDTH: width,
    SCREEN_HEIGHT: height,
    // 水平容器
    ROW_CONTAINER: {
        flex: 1,
        flexDirection: 'row',
    },
    // 垂直容器
    COLUMN_CONTAINER: {
        flex: 1,
        flexDirection: 'column',
    },
    // 垂直居中容器
    COLUMN_CENTER_CONTAINER: {
        justifyContent: 'center',
    },
    // 居中容器
    CENTER_CONTAINER: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    // 水平居中容器
    ROW_CENTER_CONTAINER: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // 水平分割线
    CALL_BORDER: {
        backgroundColor: 'black',
        height: 1,
    },
    // 左侧边框显示
    lEFT_BORDER: {
        borderLeftWidth:1,
        borderLeftColor:'#EFEFEF'
    },
    // 顶部导航栏背景颜色
    NAVIGATIONBAR_TINTCOLOR: {
        tintColor: 'dodgerblue',
    },
    IOS_MARGIN_TOP:{
        marginTop:20
    },
    BottomLine:{
        borderBottomWidth:1,
        borderBottomColor:'#EFEFEF'
    },
    simpleLoading:{

    },
    /*****************************Welcome页面************************************/
    welcomeSlide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    /*****************************LoginPage页面************************************/
    login:{
       marginTop:height/4
    },
    loginInput:{
        marginTop: 4,
    },
    loginTitle: {
        paddingBottom: 16,
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
        opacity: 0.8,
    },
    /*****************************HomePage页面************************************/
    /*****************************TopBanner页面************************************/
    TopBanner_BACKGROUND:{
        width:width,
        height:bannerHeight,
        resizeMode:'cover'
    },
    TopBanner_LOGO:{
        width:width*0.2,
        height:width*0.2,
        resizeMode:'contain'
    },
    /****logo图标 AppName 登录用户信息样式****/
    TopBanner_Info:{
        flexDirection: 'row',
        alignItems:'center',
        alignSelf:'flex-start',
        marginTop:20,
        marginLeft:width*0.05,
        backgroundColor:'transparent'
    },
    TopBanner_AppName:{
        color:'#F1F1F1',
        fontSize:width*0.04,
        marginRight:width*0.01
    },
    TopBanner_User:{
        color:'#F1F1F1',
        fontSize:width*0.03
    },
    /****时间天气样式****/
    TopBanner_WeatherTime:{
        width:width-width*0.1,
        height:bannerHeight/3.5,
        marginLeft:width*0.05,
        backgroundColor:'transparent',
        flexDirection: 'row',
        marginTop:bannerHeight/3,
        justifyContent:'flex-start'
    },
    TopBanner_WeatherTime_LEFT:{
        height:bannerHeight/4,
    },
    TopBanner_TIME:{
        fontSize:height*0.05,
        color:'#F1F1F1',
    },
    TopBanner_DAY:{
        fontSize:height*0.015,
        color:'#F1F1F1',
    },
    TopBanner_WeatherTime_RIGHT:{
        height:bannerHeight/4,
    },
    TopBanner_WeatherTime_RIGHT_TOP:{
        width:(width-width*0.1)/5*3,
        height:bannerHeight/4/5*2,
    },
    TopBanner_WeatherTime_RIGHT_BOTTOM:{
        width:(width-width*0.1)/5*3,
        height:bannerHeight/4/5*3,
        flexDirection: 'row',
    },
    TopBanner_TEMPERATURE:{
        fontSize:height*0.05,
        color:'#F1F1F1',
    },
    TopBanner_LOCATION:{
        fontSize:height*0.02,
        color:'#F1F1F1',
    },
    TopBanner_WEATHER:{
        fontSize:height*0.02,
        color:'#F1F1F1',
    },
    /****搜索输入框样式****/
    TopBanner_Search:{
        width:width-width*0.1,
        height:bannerHeight/7,
        marginLeft:width*0.05,
        marginTop:bannerHeight*0.01,
        backgroundColor:'#F1F1F1',
        borderRadius:bannerHeight/5/4,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row',
    },
    TopBanner_SearchInput:{
        width:width-width*0.1-width*0.15,
        height:bannerHeight/7,
        marginLeft:width*0.05,
        borderRadius:bannerHeight/5/4,
        backgroundColor:'#F1F1F1'
    },
    /****TitleBar标题样式****/
    TitleBar:{
        height:height*0.05,
        alignItems:'flex-end',
    },
    TitleBar_title:{
        marginLeft:width*0.05,
        borderBottomWidth:2,
    },
    /****Chart图标样式****/
    Chart:{
        flexDirection: 'row',
        width:width,
        height:chartHeight,
        marginTop:height*0.01,
        borderTopColor:'#F2F2F2',
        borderTopWidth:2,
        borderBottomColor:'#F2F2F2',
        borderBottomWidth:2,
    },
    PieChart:{
        flex:1,
        height:chartHeight-width*0.01*2,
        backgroundColor:'#F2F2F2',
        padding:width*0.01,
    },
    LineChart:{
        flex:2,
        height:chartHeight-width*0.01*2,
        backgroundColor:'#F2F2F2',
        padding:width*0.01,
    },
    /****横向banner列表样式****/
    listBanner:{
        marginTop:height*0.01,
    },
    /****功能模块列表样式****/
    listModels:{
        //改变主轴方向
        flexDirection:'row',
        //多行显示
        flexWrap:'wrap'
    },
    innerViewStyle:{
        width:cellWH,
        height:cellWH,
        marginLeft:vMargin,
        marginTop:hMargin,
        alignItems:'center'
    },
    iconStyle :{
        width:40,
        height:40
    },
    /****新闻公告样式****/
    news:{
        marginTop:height*0.01,
    },
    swiperNews:{
    },
    swiperNewsImage:{
        width:width,
        height:width/2.5,
        resizeMode:'cover'
    },
    listNews:{
        marginTop:height*0.01,
        borderTopColor:'#F2F2F2',
        borderTopWidth:2,
    },
    /****新闻列表样式****/
    listNewsRowContent:{
        flex:3,
        height:newsHeight,
        justifyContent:'space-around'
    },
    listNewsRowImage:{
        flex:2,
        height:newsHeight,
        resizeMode:'cover'
    }
};

export default CSS;
