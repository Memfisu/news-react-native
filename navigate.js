import React from 'react';
import { Main } from './components/Main';
import { FullInfo } from 'news/components/FullInfo';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={
                        {
                            title: 'Главная страница',
                            headerStyle: {
                                backgroundColor: '#fff',
                                height: 100,
                            },
                            headerTitleStyle: {
                                fontWeight: '600',
                                color: '#194F82',
                                fontFamily: 'mt-semibold',
                            }
                        }
                    }
                />
                <Stack.Screen
                    name="FullInfo"
                    component={FullInfo}
                    options={
                        {
                            title: 'Подробнее о новости',
                            headerStyle: {
                                backgroundColor: '#fff',
                                height: 100,
                            },
                            headerTitleStyle: {
                                fontWeight: '600',
                                color: '#194F82',
                                fontFamily: 'mt-semibold',
                            }
                        }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
