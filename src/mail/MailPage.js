/**
 * Created by lanccj on 2017/3/5.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    ListView
} from 'react-native';

//全局StyleSheet样式
import Css from '@config/Css'

//引入自定义组件
import RowDataView from '../compo/RowDataView'
import NavBar from '../compo/NavBar'

//模拟数据
var listnMailsData=require('../data/listMails.json')

//第三方组件

class MailPage extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
        };
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
            dataSource: this.state.dataSource.cloneWithRows(listnMailsData.data),
        });

    }

    render = () => (
        <View style={[Css.COLUMN_CONTAINER]}>
            <NavBar title="收 件 箱"/>
            <ListView
                style={[Css.listMails]}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderRowView(rowData,'mails')}
                enableEmptySections={true}
            />
        </View>
    )
}

export default MailPage;