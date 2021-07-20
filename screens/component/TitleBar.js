import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView  } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo'
import { useNavigation, DrawerActions } from '@react-navigation/native';

const TitleBar = () => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                // borderWidth: 1,
                flexDirection: 'row'
            }}>
            {/* <Text>Hello, world!</Text> */}
            <View style={styles.titleCont}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Icon name="menu" color='#F84B4B' size={40} />
                </TouchableOpacity>
            </View>
            <View style={styles.titleCont}>
                <TouchableOpacity>
                    <Image source={require('../../images/ChippiesLogo.png')}
                        style={{
                            width: widthPercentageToDP('22'),
                            height: heightPercentageToDP('13'),
                            resizeMode: 'stretch'
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.titleCont}>
                <TouchableOpacity onPress={() => navigation.navigate('Page 2', {
                    params: 'cart/'
                })}>
                    <Icon name="shopping-cart" color='#F84B4B' size={40} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default TitleBar;

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