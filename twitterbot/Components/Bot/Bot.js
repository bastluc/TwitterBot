import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BotMenu from './_partials/BotMenu';
import BotPostAuto from './_partials/BotPostAuto';
import BotReponseAuto from './_partials/BotReponseAuto';
import GoBotPostAuto from './_partials/GoBotPostAuto';
import GoBotReponseAuto from './_partials/GoBotReponseAuto';

const Stack = createStackNavigator();

export default class Settings extends React.Component {

    render() {
        return (
            <Stack.Navigator initialRouteName="BotMenu" screenOptions={
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
                <Stack.Screen name="BotMenu" component={BotMenu} options={{ title: "Bots" }} />
                <Stack.Screen name="BotPostAuto" component={BotPostAuto} options={{ title: "Bot post automatique" }} />
                <Stack.Screen name="BotReponseAuto" component={BotReponseAuto} options={{ title: "Bot réponse automatique" }} />
                <Stack.Screen name="GoBotPostAuto" component={GoBotPostAuto} options={{ title: "Bot" }} />
                <Stack.Screen name="GoBotReponseAuto" component={GoBotReponseAuto} options={{ title: "Bot" }} />
            </Stack.Navigator>
        );
    }

}