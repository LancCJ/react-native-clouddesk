/**
 * Created by lanccj on 2017/3/4.
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

//模拟数据

//第三方组件
import Swiper from 'react-native-swiper';

class SwiperNews extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render = () => (
        <View style={[Css.COLUMN_CONTAINER]}>
            <Swiper
                width={Css.SCREEN_WIDTH}
                height={Css.SCREEN_WIDTH/2.5}
                dotColor="#F5F5F5"
                autoplay={true}
                paginationStyle={{ bottom:2}}
            >
                <View >
                    <Image
                        style={Css.swiperNewsImage}
                        source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489223652&di=65811b41c720ff7121cd5de80dc67f93&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.hainan.gov.cn%2Fhn%2Fyw%2Fxwlb%2F201605%2FW020160531314347031387.png'}}
                    />
                </View>
                <View >
                    <Image
                        style={Css.swiperNewsImage}
                        source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489223680&di=4cc7e8a0862f0294bcf951817f581cfa&imgtype=jpg&er=1&src=http%3A%2F%2Fi02.cztv.com%2F2015%2F05%2F5cf5691b-e26e-d53a-eb0a-c5b4ed4296fd_t.jpg'}}
                    />
                </View>
                <View >
                    <Image
                        style={Css.swiperNewsImage}
                        source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489223722&di=73a217d15dbe0bf085ecaff2e359f842&imgtype=jpg&er=1&src=http%3A%2F%2Fimage100.360doc.com%2FDownloadImg%2F2016%2F10%2F0500%2F81550050_2.jpg'}}
                    />
                </View>
            </Swiper>
        </View>
    )
}

export default SwiperNews;