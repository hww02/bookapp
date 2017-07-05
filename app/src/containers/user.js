/**
 * Created by apple on 17/7/3.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Platform
} from 'react-native';
import pxToDp   from '../util/px';

class User extends Component {
    static navigationOptions = {
        headerStyle:{
            backgroundColor:'#ffb307',
            height:pxToDp(Platform.OS === 'ios'?210:150)
        },
        headerTitleStyle:{
            color:'white'
        },
    }
    render() {
        return (
            <View >
                <Text>我是用户</Text>
            </View>
        );
    }
}

export default User;