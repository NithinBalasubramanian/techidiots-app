import React , { useState , useEffect } from 'react';
import { StyleSheet, Image , Text, View , ScrollView , TouchableHighlight } from 'react-native';
import axios from '../Api/instanceApi';

export default function Home() {

  
    let [ ListTopdata , setListTopdata ] = useState([]);

    useEffect(() => {
        // window.scrollTo(0, 0);
        fetchAbove();
      
    //   const timer = setTimeout(() => {
    //      fetchMid();
    //     }, 3000);
    //   const timer1 = setTimeout(() => {
    //      fetchAll();
    //     }, 5000);
     // return () => clearTimeout(timer);
      
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

    const pressHandler = () => {
      alert('hi');
    }

  return (
    

    <ScrollView style={ homePage.container } >
        <View style={ homePage.main } >
        { ListTopdata.map((itm,k) => {
                if(k < 4  ){
                    return (
                      <TouchableHighlight onPress={ pressHandler } key={k}>
                        <View style={ homePage.topList } >
                            <Image
                                style={ homePage.blogImg }
                                source={{
                                uri:  itm.imgUrl ,
                                }}
                            />
                            <View style={ homePage.onImg }>
                                <Text style={ homePage.onImgTitle }>
                                    { itm.title }
                                </Text>
                            </View>
                        </View>
                      </TouchableHighlight>
                    )
                } 
            })
        }
        </View>
    </ScrollView>

  );
}

const homePage = StyleSheet.create({
  container : {
    width : '100%',
    height : 600,
    overflow : 'scroll',
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
      height: 300,
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
    fontSize: 20,
    fontWeight: "800",
    paddingTop: 130,
    paddingLeft : 10,
    letterSpacing: 1,
  }
});
