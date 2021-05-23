import React from 'react';
import { StyleSheet, Image , Text, View } from 'react-native';

export default Footer = () => {
    return (
        <View style={ style.footer }>
        </View>
    )
}

const style = StyleSheet.create({
    footer : {
        width : '100%',
        height : 50,
        backgroundColor : '#40e693',
    }
})