import React , { useState , useEffect } from 'react';
import { StyleSheet, Image , Text, View , ScrollView , Alert ,TouchableHighlight, FlatList, TouchableOpacity } from 'react-native';
import axios from '../Api/instanceApi';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//pages
import Blogview from './blogView'


const Stack = createStackNavigator();


const Home = ({ navigation }) => {

  
    let [ ListTopdata , setListTopdata ] = useState([]);

    useEffect(() => {
        fetchAbove();      
    }, [])
  
    const fetchAbove = () => {
        axios.get('/homeTopFetch')
      .then((res) => {
            setListTopdata(res.data);
            // setFetchStatus(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const renderItem = ({item}) => {
      return (
        <TouchableOpacity onPress={() => { navigation.push("Blogview", item )} } > 
          <View style={ homePage.topList } >
              <Image
                  style={ homePage.blogImg }
                  source={{
                  uri:  item.imgUrl ,
                  }}
              />
              <View style={ homePage.onImg }>
                  <Text style={ homePage.onImgTitle }>
                      { item.title }
                  </Text>
              </View>
          </View>
        </TouchableOpacity>
      )
    }

  return (
    

    <ScrollView style={ homePage.container }  >
        <View style={ homePage.main } >
          <FlatList  data={ListTopdata}
                    keyExtractor={item => `${item._id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: 20 }}
              />
        </View>
    </ScrollView>

  );
}

const Page = () => {
  return(
      <Stack.Navigator
          screenOptions={{
              headerShown: false
          }}
          initialRouteName={'Home'}  >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Blogview" component={Blogview} />
          </Stack.Navigator>
  )
}

export default Page

const homePage = StyleSheet.create({
  container : {
    width : '100%',
    flex : 1,
  },
  main: {
    width: '100%',
    minHeight: 600,
  },
  topList : {
      width:'90%',
      marginVertical:10,
      marginHorizontal: '5%',
      backgroundColor:'#f2f2f2',
      height: 200,
      overflow : 'hidden',
      borderRadius : 10,
  },
  blogImg : {
      width : '100%',
      height : '100%',
  },
  onImg : {
    width: '100%',
    height: 300,
    zIndex: 5,
    marginTop: -300,
    backgroundColor: 'rgba(41,55,80,.5)',
  },
  onImgTitle : {
    color: '#cafacc',
    fontSize: 18,
    fontWeight: "900",
    paddingTop: 130,
    paddingLeft : 10,
    letterSpacing: 1,
  }
});
