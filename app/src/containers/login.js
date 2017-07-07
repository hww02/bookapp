/**
 * Created by apple on 17/7/4.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';
import pxToDp     from '../util/px';

class Login extends Component {
    static navigationOptions = {
        headerStyle:{
            backgroundColor:'#ffb307'
        },
        headerTitleStyle:{
            color:'white'
        },
    }
    render() {
        return (
            <View >
                <Image
                    source={require('../images/tab/userSelect.png')}
                    style={styles.icon}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon:{
        height:pxToDp(90),
        width:pxToDp(90),
        padding:0,
        margin:0,
        borderRadius:0
    }
});

export default Login;