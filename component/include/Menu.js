import React , { useState } from 'react';
import { StyleSheet, Image , Text, View } from 'react-native';
import Logo from '../../assets/techidiots.png';
import { BiMenuAltLeft } from 'react-icons/bi';

//Styles

import { StyleData , ScreenDisp } from '../../Ui/StyleData'

const Menu = () => {

 const [ NavStatus , setNavStatus ] = useState(true);

 const menuState = () => {
    setNavStatus(!NavStatus);
 }

  return (
        <View style={ navBar.main } >
            <View style={ navBar.logo } >
                <Image
                    style={ navBar.logoImg }
                    source={{
                    uri: 'https://techidiots.in/techidiots.png',
                    }}
                />
            </View>
            <View style={ navBar.icon }>
                <Image
                    style={ navBar.logoImg }
                    source ={require('../../assets/icons/notification.png')}
                    resizeMode ='contain'
                    style = {{
                        width:25,
                        height : 25,
                        margin:20,
                        tintColor : StyleData.SecondaryColor,
                    }}
                />
            </View>
        </View>
  );
}

export default Menu;

const navBar = StyleSheet.create({
  main: {
    width: '100%',
    height: 75,
    backgroundColor: '#40e693',
    overflow: 'hidden',
    flexDirection: "row",
    flexWrap: "wrap",
    padding : 15,
  },
  logo: {
    width : '80%',
    height : '100%',
    backgroundColor : '#40e693'
  },
  logoImg : {
      width : '75%',
      height : 60,
      margin: 4,
  },
  icon : {
      width : '20%',
      height : 60,
      backgroundColor : '#40e693',
  },
  mainNavListOff : {
      display : 'none',
  },
  mainNavListOn : {
      width : '100%',
      height : 600,
      backgroundColor : '#40e693',
      display : 'flex',  
  },
});
