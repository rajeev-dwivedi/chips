import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo'
import TitleBar from '../screens/component/TitleBar'

const buttonLabels = [
    // { Label: 'Dashboard', Route: 'Page 1' },
    { Label: 'Shop By Category', Route: 'Page 1' },
    { Label: 'Variety Packages', Route: 'Page 2', Params: 'product-category/variety-packages/' },
    { Label: 'Shop Wholesome', Route: 'Page 2', Params: 'product-category/wholesale/' },
    // { Label: 'Contact', Route: 'Page 1' }
]


const Dashboard = () => {
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
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: 'white',
            }}>
            <View style={styles.titleBar}>
                <TitleBar />
            </View>
            <View>
                <View>
                    <View style={styles.button}>
                        {buttonComp()}
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Dashboard;

const styles = StyleSheet.create({
    titleBar: {
        // borderWidth: 1,
        width: widthPercentageToDP('100'),
        position: 'absolute',
        top: 5,
        flexDirection: 'row',
        // padding: heightPercentageToDP('1'),
        // elevation: 5,
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
        marginVertical: heightPercentageToDP('3'),
        elevation: 10
    },
    buttonLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        width: widthPercentageToDP('100'),
        height: heightPercentageToDP('80'),
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
        // marginVertical: heightPercentageToDP('10')
    },
    titleCont: {
        // borderWidth: 1,
        width: widthPercentageToDP('30'),
        alignItems: 'center',
        height: heightPercentageToDP('15'),
        justifyContent: 'center'
    }
})