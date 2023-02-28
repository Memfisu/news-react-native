import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Modal } from 'react-native';
import { gStyle } from '../styles/style';
import React, {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Form } from './Form';

const startData = [
    { name: 'Google', short: 'Google!!', full: 'Google is cool Google is cool Google is cool Google is cool Google is cool Google is coolGoogle is cool', key: '1', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/640px-Google_Chrome_icon_%28February_2022%29.svg.png' },
    { name: 'Apple', short: 'Apple!!', full: 'Apple is cool', key: '2', img: 'https://www.ceo-middleeast.com/cloud/2021/07/05/apple-logo-rainbow.jpg' },
    { name: 'Facebook', short: 'Facebook!!', full: 'Facebook is cool', key: '3', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/640px-Facebook_F_icon.svg.png' },
];

export const Main = ({ navigation }) => {
    const [news, setNews] = useState(startData);
    const [showModal, setShowModal] = useState(false);

    const onItemPress = (item) => {
        navigation.navigate('FullInfo', item);
    }

    const addArticle = (article) => {
        setNews((list) => {
            const newArticle = {
                ...article,
                key: list?.length+1
            }
            return [newArticle, ...list];
        });
        setShowModal(false);
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
                <Image source={{uri: item.img}} style={styles.image} />
                <Text style={styles.title}>
                    {item.name}
                </Text>
                <Text style={styles.short}>
                    {item.short}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={gStyle.main}>
            <Modal visible={showModal}>
                <View style={gStyle.main}>
                    <AntDesign
                        name="closecircle"
                        size={40}
                        color="#56ACE0"
                        style={styles.iconClose}
                        onPress={() => setShowModal(false)}
                    />
                    <Text style={gStyle.title}>Добавить новость</Text>
                    <Form addArticle={addArticle} />
                </View>
            </Modal>
            <Ionicons
                name="add-circle"
                size={60}
                color="#56ACE0"
                style={styles.iconAdd}
                onPress={() => setShowModal(true)}
            />
            <FlatList data={news} renderItem={renderItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 30
    },
    title: {
        fontFamily: 'mt-semibold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
        color: '#194F82'
    },
    short: {
        fontFamily: 'mt-regular',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        color: '#194F82'
    },
    item: {
        width: '100%',
        marginBottom: 30,
        padding: 20,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#56ACE0',
        backgroundColor: '#fff',
        shadowColor: "#194F82",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 200,
    },
    iconAdd: {
        textAlign: 'right',
        marginBottom: 15,
        shadowColor: "#194F82",
        elevation: 3,
    },
    iconClose: {
        textAlign: 'right',
        marginBottom: 15
    }
})