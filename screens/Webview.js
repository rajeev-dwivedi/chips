import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { WebView } from 'react-native-webview';


const WebViewExample = ({ route }) => {
   const { params } = route.params;
   return (
      <View style={styles.container}>
         <WebView
            source={{
               uri: `https://ekodev3.com/chippies/${params}`
            }}

         />
      </View>
   )
}
export default WebViewExample;

const styles = StyleSheet.create({
   container: {
      borderWidth: 1,
      width: widthPercentageToDP('100'),
      height: heightPercentageToDP('100')
   }
})