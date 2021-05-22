import React , { useState } from 'react';
import { StyleSheet, Image , Text, View } from 'react-native';
import Logo from '../../assets/techidiots.png';
import { BiMenuAltLeft } from 'react-icons/bi';

export default function App() {

 const [ NavStatus , setNavStatus ] = useState(true);

 const menuState = () => {
    setNavStatus(!NavStatus);
 }

  return (
    <>
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
                <BiMenuAltLeft  onClick={ menuState } size="40px" color="#fff" style={{ margin:"10px 20px 10px 10px",float:"right" }} />
            </View>
        </View>
        <View style={ NavStatus ? navBar.mainNavListOff : navBar.mainNavListOn  } >

        </View>
    </>
  );
}

const navBar = StyleSheet.create({
  main: {
    width: '100%',
    height: 60,
    backgroundColor: '#40e693',
    overflow: 'hidden',
    flex : 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  logo: {
    width : '80%',
    height : '100%',
    backgroundColor : '#40e693'
  },
  logoImg : {
      width : '75%',
      height : '94%',
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
      display : 'block',    
  }
});
