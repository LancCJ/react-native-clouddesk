# React-Native-CloudDesk
使用react native尝试做APP




    更新日志
        2017年03月30日
            优化性能记录
            1.PureComponent
            2.具体化render次数  通过swallowcompare（，）
        2.正式打包 因为 react-native-echarts的组件问题 
             Android   
                      将node_modules/native-echaers/src/components/Echarts/tpl.html拷贝到assets下
                      需要修改node_modules/native-echaers/src/components/Echarts/index.js
                      source={{uri:'file:///android_asset/tpl.html'}}
             IOS      将   tpl.html  放置  Xcode项目 下面 然后如下引用
                
                
             import React, { Component } from 'react';
             import { WebView, View, StyleSheet,Platform } from 'react-native';
             import renderChart from './renderChart';
             import echarts from './echarts.min';
             
             
             export default class App extends Component {
               componentWillReceiveProps(nextProps) {
                 if(nextProps.option !== this.props.option) {
                   this.refs.chart.reload();
                 }
               }
             
               render() {
                 return (
                   <View style={{flex: 1, height: this.props.height || 400,}}>
             
                       {Platform.OS==='ios'?(
                               <WebView
                                   ref="chart"
                                   scrollEnabled = {false}
                                   injectedJavaScript = {renderChart(this.props)}
                                   style={{
                         height: this.props.height || 400,
                       }}
                                   source={{uri:'tpl.html'}}
                               />
                           ):(
                               <WebView
                                   ref="chart"
                                   scrollEnabled = {false}
                                   injectedJavaScript = {renderChart(this.props)}
                                   style={{
                         height: this.props.height || 400,
                       }}
                                   source={{uri:'file:///android_asset/tpl.html'}}
                               />
                           )}
             
             
                   </View>
                 );
               }
             }
   
        1.加入redux管理应用状态(首页的 天气 城市 时间)
    主要目的:
        1.学习组件化开发，封装通用组件，其他项目复用
        2.学习界面样式布局
        3.部分组件回顾
## Screens

| Platform| IOS     | ANDROID
| :------:| :-------: | :-------: 
| GIF|  ![ios app](https://github.com/LancCJ/github-project-docs/raw/master/doc/react-native-clouddesk/IOS_APP.gif) |![Android app](https://github.com/LancCJ/github-project-docs/raw/master/doc/react-native-clouddesk/ANDROID_APP.gif)    |   
        
