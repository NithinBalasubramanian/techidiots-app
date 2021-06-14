import React , { useState , useEffect } from 'react';
import { StyleSheet, Image , Text, View , ScrollView , Alert ,TouchableHighlight, FlatList, TouchableOpacity } from 'react-native';
import axios from '../Api/instanceApi';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//pages
import Blogview from './blogView'

//Styles

import { StyleData , ScreenDisp } from '../../Ui/StyleData'


const Stack = createStackNavigator();


const Home = ({ navigation }) => {

  
    let [ ListTopdata , setListTopdata ] = useState([]);

    let [ ListInfo , setListInfo ] = useState([]);

    let [ ListNews , setListNews ] = useState([]);

    useEffect(() => {
        fetchAbove();    
        fetchMid();  
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

    const fetchMid = () => {
      axios.get('/blogFetchHome/techInfo')
     .then((res) => {
           setListInfo(res.data);
       })
       .catch((error) => {
           console.log(error);
       })
       axios.get('/blogFetchHome/techNews')
     .then((res) => {
           setListNews(res.data);
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

    const slideItems = ({item}) => {
      return(
          <TouchableOpacity onPress={() => { navigation.push("Blogview", item )} } style={{marginRight : 5 , marginLeft : 5}} > 
          <View style={ homePage.slideItem } >
              <Image
                  style={ homePage.slideImage }
                  source={{
                  uri:  item.imgUrl ,
                  }}
              />
              <View style={ homePage.slideData }>
                <Text style={ homePage.slideAuther } >
                  { item.auther }
                </Text>
              </View>
              <Text style={ homePage.slideHead } >
                {item.title}
              </Text>
          </View>
        </TouchableOpacity>
      )
    }

  return (
    

    <ScrollView style={ homePage.container }  >
        <View style={ homePage.main } >
          <Text style={ homePage.homeHeading }>Latest</Text>
          <FlatList  
              horizontal 
              showsHorizontalScrollIndicator={false}  data={ListTopdata}
              keyExtractor={item => `${item._id}`}
              renderItem={slideItems}
              contentContainerStyle={{ paddingVertical: 10 }} 
            />

            <Text style={ homePage.homeHeading }>Tech Analyse Blogs</Text>

          <FlatList  
              horizontal 
              showsHorizontalScrollIndicator={false}  data={ListInfo}
              keyExtractor={item => `${item._id}`}
              renderItem={slideItems}
              contentContainerStyle={{ paddingVertical: 10 }} 
            />

             <Text style={ homePage.homeHeading }>Tech NEWS Blogs</Text>

            <FlatList  
              horizontal 
              showsHorizontalScrollIndicator={false}  data={ListNews}
              keyExtractor={item => `${item._id}`}
              renderItem={slideItems}
              contentContainerStyle={{ paddingVertical: 10 }} 
            />
          

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
    backgroundColor : StyleData.background,
    marginBottom : 40
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
  },
  slideItem : {
    width : 260,
    marginLeft :0,
    height : 300,
    backgroundColor : StyleData.White,
    borderRadius : 5,
    overflow : 'hidden',
  },
  slideImage : {
    width : ScreenDisp.WidthFull,
    height : 180,
  },
  slideData : {
    flexDirection : 'row',
  },
  slideAuther : {
    width : ScreenDisp.WidthFull,
    color : StyleData.SubText,
    paddingHorizontal : 15,
    paddingTop : 10,
  },
  slideCat : {
    width : '40%',
    color : StyleData.SubText,
  },
  slideHead : {
    paddingHorizontal : 15,
    paddingVertical : 10,
  },
  homeHeading : {
    paddingHorizontal : 10,
    paddingHorizontal : 10,
    marginVertical : 10,
    fontSize : 18,
    letterSpacing : 1,
    color : StyleData.PriColor
  }
});
