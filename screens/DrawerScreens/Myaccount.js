import React from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


const Myaccount = () => {
    return (
        <View style={{
            width: widthPercentageToDP('100'),
            height: heightPercentageToDP('100')
        }}>
            <WebView
                source={{
                    uri: 'https://ekodev3.com/chippies/my-account/'
                }}
            />
        </View>
    )
}
export default Myaccount;