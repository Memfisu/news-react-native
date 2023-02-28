import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import { Formik } from 'formik';

export const Form = ({ addArticle }) => {
    return (
        <View>
            <Formik
                initialValues={{
                    name: '',
                    short: '',
                    full: '',
                    img: ''
                }}
                onSubmit={(values, action) => {
                    addArticle(values);
                    action.resetForm();
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            value={props.values.name}
                            placeholder='Введите заголовок'
                            placeholderTextColor="silver"
                            onChangeText={props.handleChange('name')}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.short}
                            multiline
                            placeholder='Введите краткий текст'
                            placeholderTextColor="silver"
                            onChangeText={props.handleChange('short')}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.full}
                            multiline
                            placeholder='Введите полный текст'
                            placeholderTextColor="silver"
                            onChangeText={props.handleChange('full')}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.img}
                            placeholder='Укажите ссылку на изображение'
                            placeholderTextColor="silver"
                            onChangeText={props.handleChange('img')}
                        />
                        <Pressable
                            style={styles.addButton}
                            onPress={props.handleSubmit}
                        >
                            <Text style={styles.buttonLabel}>Добавить</Text>
                        </Pressable>
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 8,
        borderColor: '#56ACE0',
        borderRadius: 8,
    },
    addButton: {
        marginTop: 15,
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#FFC10D',
    },
    buttonLabel: {
        color: '#fff',
        fontFamily: 'mt-semibold',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})