/**
 * Created by lanccj on 2017/3/5.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

//全局StyleSheet样式
import Css from '@config/Css'

//引入自定义组件
import NavBar from '../compo/NavBar'

//模拟数据

//第三方组件

class MailDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount=()=> {
        this.setState({
            time:this.props.data.time,
            title:this.props.data.title,
            content:this.props.data.content,
            send:this.props.data.send,
            reply_content:this.props.data.reply_content,
            reply:this.props.data.reply,
        });

    }

    render = () => (
        <View style={[Css.COLUMN_CONTAINER]}>
            <NavBar title="邮 件 详 情"/>
            <View>
                <View style={[Css.mailDetailInfo]}>
                    <Image
                        style={[Css.mailDetailImage]}
                        source={{uri: 'mailopen'}}
                    />
                    <View style={[Css.mailDetailTitle]}>
                        <Text>收信时间:{this.state.time}</Text>
                        <Text numberOfLines={2}>邮件主题:{this.state.title}</Text>
                    </View>
                </View>
                <View style={[Css.mailContent]}>
                    <Text >    {this.state.content}</Text>
                    <Text style={[Css.mailDatailSender]}>发件人({this.state.send})</Text>
                </View>
                <View style={[Css.handlingSuggestion]}>
                    <Text style={[Css.handlingSuggestionText]}>处理意见</Text>
                </View>
                <View style={[Css.mailContent]}>
                    <Text>    {this.state.reply_content}</Text>
                    <Text style={[Css.mailDatailSender]}>回复人({this.state.reply})</Text>
                </View>
            </View>
            <View style={[Css.CALL_BORDER,{marginTop:Css.SCREEN_HEIGHT*0.01}]}></View>
        </View>
    )
}

export default MailDetailPage;