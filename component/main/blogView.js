import React from 'react';
import { StyleSheet, Image , Text, View , ScrollView , Alert ,TouchableHighlight } from 'react-native';
import axios from '../Api/instanceApi';

//Styles

import { StyleData , ScreenDisp } from '../../Ui/StyleData'

const Blogview = ({route}) => {

    const data = route.params;

    return(
        <ScrollView>
            <View style={StyleUI.Blogview}>
                <Text style={StyleUI.category}>{data.category}</Text>
                <Text style={StyleUI.bloghead}>{data.title}</Text>
                <Text style={StyleUI.blogpreheading}>{data.preheading}</Text>
                <Image 
                    source={{
                        uri:  data.imgUrl ,
                    }}
                    style = {{ height :200 ,width : '100%', ...StyleUI.Blogimg }}
                />
                <Text style={StyleUI.auther} >{data.auther}</Text>
                <Text style={StyleUI.para} >{data.blog}</Text>
                { (data.subPara) ? 
                        data.subPara.map((sub_itm,s_k) => {
                        if(sub_itm.SubHeading === 'head'){
                            return (
                                <Text key={s_k} style={StyleUI.head}>{sub_itm.Content}</Text>
                            ) 
                        }else if(sub_itm.SubHeading === 'sub_head'){
                            return (
                                <Text  key={s_k} style={StyleUI.sub_head}>{sub_itm.Content}</Text>
                            ) 
                        }else if(sub_itm.SubHeading === 'sub_img'){
                            return (
                                <Image
                                source = {{
                                    uri : sub_itm.Content
                                    }} 
                                    style = {{
                                        width : '100%',
                                        height : 200,
                                        ...StyleUI.Blogimg
                                    }} />
                            ) 
                        }
                        // else if(sub_itm.SubHeading === 'tweet'){
                        //     return (
                        //         <div className="tweet">
                        //             <TweetEmbed  id={ sub_itm.Content } />
                        //         </div>
                        //     ) 
                        //}
                        else if(sub_itm.SubHeading === 'bold'){
                            return (
                                <Text style={StyleUI.bold} > {sub_itm.Content} </Text>
                            ) 
                        }
                        // else if(sub_itm.SubHeading === 'youtube'){
                        //     return (
                        //         <ReactPlayer url={ sub_itm.Content } width="100%" height="400px" />
                        //     ) 
                        // }
                        // else if(sub_itm.SubHeading === 'quotes'){
                        //     return (
                        //         <blockquote className="otro-blockquote">
                        //             { sub_itm.Content }
                        //         </blockquote>
                                
                        //     ) 
                        // }
                        else{
                            return (
                                <Text  style={StyleUI.para} key={s_k} >{sub_itm.Content}</Text>
                            ) 
                        }
                    })
                    : null 
                    }
                </View>
        </ScrollView>
    )
}

const StyleUI = StyleSheet.create(
    {
        Blogview : {
            width : '90%',
            marginHorizontal : '5%',
            paddingBottom : 100,
        },
        category : {
            marginVertical : 4,
            width : 160,
            paddingHorizontal : 12,
            paddingVertical : 5,
            alignItems : 'center',
            justifyContent : 'center',
            textAlign : 'center',
            textTransform : 'uppercase',
            color : StyleData.White,
            letterSpacing : 2,
            backgroundColor : StyleData.PriColor,
        },
        bloghead : {
            fontSize : 26,
            marginVertical : 10,
            letterSpacing : 1,
        },
        blogpreheading : {
            fontSize : 14,
            color : StyleData.SubText,
            letterSpacing : 1,
        },
        Blogimg : {
            marginVertical : 10,
            borderRadius : 8
        },
        para : {
            textAlign : 'justify',
            marginVertical : 10,
            letterSpacing : 1,
            lineHeight : 22,
        },
        bold : {
            fontSize : 15,
            fontWeight : '900',
            color : StyleData.TextHeading,
            letterSpacing : 1,
        },
        head : {
            fontSize : 18,
            fontWeight : '900',
            color : StyleData.PriColor,
            letterSpacing : 1,
        },
        sub_head : {
            fontSize : 16,
            fontWeight : '900',
            color : StyleData.PriColor,
            letterSpacing : 1,
        },
        auther : {
            fontSize : 12,
            color : StyleData.PriColor,
            letterSpacing : 1,
        }
    }
)

export default Blogview
