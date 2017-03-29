/**
 * Created by lanccj on 2017/3/6.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
StyleSheet
} from 'react-native';

//全局StyleSheet样式
import Css from '@config/Css'

//引入自定义组件
import NavBar from '../../compo/NavBar'


//模拟数据

//第三方组件
var t = require('tcomb-form-native');
var Form = t.form.Form;

// here we are: define your domain model
var Person = t.struct({
    身份证号: t.String,
    姓名: t.String,
    出生日期: t.Date,
});

var options = {}; // optional rendering options (see documentation)

class PeopleSearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    onPress=()=> {
        // call getValue() to get the values of the form
        var value = this.refs.form.getValue();
        if (value) { // if validation fails, value will be null
            console.log(value); // value here is an instance of Person
        }
    }

    render = () => (
        <View style={[Css.COLUMN_CONTAINER]}>
            <NavBar title="人 员 查 询"/>

            <View style={styles.container}>
                {/* display */}
                <Form
                    ref="form"
                    type={Person}
                    options={options}
                />
                <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>查  询</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});

export default PeopleSearchPage;