import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import SettingsIndex from './_partials/SettingsIndex';

const Stack = createStackNavigator();

export default class Settings extends React.Component {

    render(){
        return(
            <Stack.Navigator initialRouteName="Paramètres" screenOptions={
                {
                    headerStyle: {
                        backgroundColor: "#3A3E42",
                    },
                    headerTitleStyle: {
                        color: "#fff"
                    },
                    headerTintColor: "tomato"
                }
            }>
                <Stack.Screen name="Paramètres" component={SettingsIndex} options={{ title : "Paramètres"}} />
            </Stack.Navigator>
        );
    }

}