import React from 'react';
import { StyleSheet, Image , Text, View , ScrollView , Alert ,TouchableHighlight } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//pages

import Menu from './component/include/Menu'
import Home from './component/main/home';
import Favorate from './component/main/Favorate'
import Profile from './component/main/Profile'
import Search from './component/main/Search'
import Category from './component/main/Category'

//Styles

import { StyleData , ScreenDisp } from './Ui/StyleData'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu />
      <Tab.Navigator tabBarOptions={{
             showLabel : false,
             style : {
                 position : 'absolute',
                 bottom:0,
                 elevation : 1,
                 backgroundColor: StyleData.PriColor,
                 height:50,
                 ...style.shadow,
             }
         }}> 
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon : ({focused}) => (
                <View style={style.navIcon }>
                    <Image 
                     source ={require('./assets/icons/home.png')}
                     resizeMode ='contain'
                     style = {{
                         width:25,
                         height : 25,
                         tintColor : focused ? StyleData.White : StyleData.SecondaryColor,
                     }}
                    ></Image>
                </View>
            ),
        }} />
        <Tab.Screen name="Search" component={Search} options={{
            tabBarIcon : ({focused}) => (
                <View style={style.navIcon }>
                    <Image 
                     source ={require('./assets/icons/search.png')}
                     resizeMode ='contain'
                     style = {{
                        width:25,
                        height : 25,
                         tintColor : focused ? StyleData.White : StyleData.SecondaryColor,
                     }}
                    ></Image>
                </View>
            ),
        }} />
        <Tab.Screen name="Category" component={Category} options={{
            tabBarIcon : ({focused}) => (
                <View style={style.navIcon }>
                    <Image 
                     source ={require('./assets/icons/list.png')}
                     resizeMode ='contain'
                     style = {{
                        width:25,
                        height : 25,
                         tintColor : focused ? StyleData.White : StyleData.SecondaryColor,
                     }}
                    ></Image>
                </View>
            ),
        }} />
        <Tab.Screen name="Favorate" component={Favorate} options={{
            tabBarIcon : ({focused}) => (
                <View style={style.navIcon }>
                    <Image 
                     source ={require('./assets/icons/like.png')}
                     resizeMode ='contain'
                     style = {{
                        width:25,
                        height : 25,
                         tintColor : focused ? StyleData.White : StyleData.SecondaryColor,
                     }}
                    ></Image>
                </View>
            ),
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
            tabBarIcon : ({focused}) => (
                <View style={style.navIcon }>
                    <Image 
                     source ={require('./assets/icons/user.png')}
                     resizeMode ='contain'
                     style = {{
                        width:25,
                        height : 25,
                         tintColor : focused ? StyleData.White : StyleData.SecondaryColor,
                     }}
                    ></Image>
                </View>
            ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const style = StyleSheet.create({
  shadow : {
      shadowColor : StyleData.ShadowColor,
      shadowOffset : {
          width : 0,
          height : 10,
      },
      shadowOpacity : 0.25,
      shadowRadius : 3.5,
      elevation : 5,
  },
  navIcon : {
      alignItems : 'center',
      justifyContent : 'center',
  }
})

