import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import UsersList from './_partials/UsersList';
import UserSingle from './_partials/UserSingle';

const Stack = createStackNavigator();

export default class Stats extends React.Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="UsersList">
                <Stack.Screen name="UsersList" component={UsersList} options={{ title: "Statistiques" }} />
                <Stack.Screen name="UserSingle" component={UserSingle} />
            </Stack.Navigator>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})