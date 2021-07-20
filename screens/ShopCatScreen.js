import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import TitleBar from '../screens/component/TitleBar'

const buttonLabels = [
    { Label: 'Canned Ackees', Route: 'Page 2', Params: 'product-category/canned-ackees/' },
    { Label: 'Chips', Route: 'Page 2', Params: 'product-category/chips/' },
    { Label: 'Tamarind Balls', Route: 'Page 2', Params: 'product-category/tamarind-balls/' },
    { Label: 'Busta Sweets', Route: 'Page 2', Params: 'product-category/busta-sweets/' },
    { Label: 'Curry Powder', Route: 'Page 2', Params: 'product-category/curry-powder/' },
    { Label: 'Pepper Shrimps', Route: 'Page 2', Params: 'product-category/pepper-shrimps/' },
    { Label: 'Bun', Route: 'Page 2', Params: 'product-category/bun/' }
]



const ShopCatScreen = () => {
    const navigation = useNavigation();
    const buttonComp = () => {
        return buttonLabels.map((data, index) => {
            return (
                <View key={index}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(data.Route, {
                            params: data.Params
                        })}
                        style={styles.buttonStyle}>
                        <Text style={styles.buttonLabel}>{data.Label}</Text>
                    </TouchableOpacity>
                </View>
            )
        })
    }
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: "center",
                backgroundColor: 'white',
            }}>
            <View style={styles.titleBar}>
                <TitleBar />
            </View>
            <View style={{
                width: widthPercentageToDP('90'),
                height: heightPercentageToDP('80'),
                justifyContent: 'center',
                alignItems: 'center',
                // borderWidth: 1
            }}>
                <View style={styles.button}>
                    <ScrollView contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} style={{
                        width: widthPercentageToDP('90'),
                    }}>
                        {buttonComp()}
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}
export default ShopCatScreen;

const styles = StyleSheet.create({
    titleBar: {
        // borderWidth: 1,
        width: widthPercentageToDP('100'),
        position: 'absolute',
        top: 5,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-evenly'
        // borderColor: '#F84B4B'
    },
    dashContainer: {
        width: widthPercentageToDP('80'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    dashLabel: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#F84B4B',
    },
    buttonStyle: {
        backgroundColor: '#F84B4B',
        height: heightPercentageToDP('8'),
        width: widthPercentageToDP('50'),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: heightPercentageToDP('2'),
        elevation: 10
    },
    buttonLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        width: widthPercentageToDP('90'),
        height: heightPercentageToDP('72'),
        alignItems: 'center',
        // borderWidth: 1
    },
    titleCont: {
        // borderWidth: 1,
        width: widthPercentageToDP('30'),
        alignItems: 'center',
        height: heightPercentageToDP('15'),
        justifyContent: 'center'
    }
})