import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, DrawerActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard';
import WebViewExample from '../screens/Webview';
import ShopCatScreen from '../screens/ShopCatScreen';
import MyAccount from '../screens/DrawerScreens/Myaccount';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Fontisto';
import { WebView } from 'react-native-webview';
import Myaccount from '../screens/DrawerScreens/Myaccount';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Dashboard"
                    component={DrawerNav}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="Page 1"
                    component={ShopCatScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="Page 2"
                    component={WebViewExample}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

function CustomDrawerContent(props) {
    const navigation = useNavigation();
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <View style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: "center",
                // borderWidth: 1,
                height: heightPercentageToDP('55')
            }}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
                    style={{
                        marginVertical: heightPercentageToDP('2')
                    }}>
                    <Icon name="angle-dobule-left" size={30} color='#F84B4B' />
                </TouchableOpacity>
                <Text style={{
                    textAlign: 'center',
                    marginHorizontal: widthPercentageToDP('2'),
                    color: '#F84B4B'
                }}>Copyright © 2021 Chippies Store.</Text>
            </View>
        </DrawerContentScrollView>
    );
}

const Contact = () => {
    return (
        <View style={{
            width: widthPercentageToDP('100'),
            height: heightPercentageToDP('100')
        }}>
            <WebView
                source={{
                    uri: 'https://ekodev3.com/chippies/contact/'
                }}
            />
        </View>
    )
}

const DashboardComp = () => {
    return (
        <View style={{
            width: widthPercentageToDP('100'),
            height: heightPercentageToDP('100')
        }}>
            <WebView
                source={{
                    uri: 'https://ekodev3.com/chippies/'
                }}
            />
        </View>
    )
}


const DrawerNav = () => {
    return (
        <Drawer.Navigator initialRouteName="Home"
            // drawerContent={props => <CustomDrawerContent {...props} />}
            drawerContent={(props) => {
                
                const filteredProps = {
                    ...props,
                    state: {
                        ...props.state,
                        routeNames: props.state.routeNames.filter(
                            // To hide single option
                            // (routeName) => routeName !== 'HiddenPage1',
                            // To hide multiple options you can add & condition
                            (routeName) => {
                                routeName !== 'Page 1' ;
                            }
                        ),
                        routes: props.state.routes.filter(
                            (route) =>
                                route.name !== 'Page 1'
                        ),
                    },
                };
                return (
                    <DrawerContentScrollView {...filteredProps}>
                        {/* <DrawerItemList {...filteredProps} /> */}
                        <CustomDrawerContent {...filteredProps} />
                    </DrawerContentScrollView>
                );
            }}
            drawerContentOptions={{
                activeTintColor: '#F84B4B',
            }}
            drawerStyle={{
                borderColor: '#F84B4B',
            }}
        >
            <Drawer.Screen name="Home" component={Dashboard} />
            <Drawer.Screen name="Dashboard" component={DashboardComp} />
            <Drawer.Screen name="My Account" component={Myaccount} />
            <Drawer.Screen name="Contact" component={Contact} />
            <Drawer.Screen
                name="Page 1"
                options={{ drawerLabel: 'Hidden Page Two option' }}
                component={ShopCatScreen}
            />
        </Drawer.Navigator>
    )
}