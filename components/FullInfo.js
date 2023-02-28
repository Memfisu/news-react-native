import {View, Text, Image, StyleSheet} from 'react-native';
import { gStyle } from '../styles/style';
import React from 'react';

export const FullInfo = ({ route }) => {
    return (
        <View style={gStyle.main}>
            <Image source={{uri: route.params.img}} style={styles.image} resizeMode='contain' />
            <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
            <Text style={styles.full}>{route.params.full}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    full: {
        fontFamily: 'mt-regular',
        fontSize: 16,
        textAlign: 'justify',
        marginTop: 20,
        color: '#194F82'
    },
    header: {
        fontSize: 25,
        marginTop: 25,
    },
    image: {
        width: '100%',
        height: 200,
    }
})