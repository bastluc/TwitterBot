import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Stats from "./Components/Stats/Stats";
import Bot from "./Components/Bot/Bot";
import Settings from "./Components/Settings/Settings";
import {Provider} from "react-redux";
import Store from "./Store/configureStore";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === "Stats") {
                                iconName = "ios-analytics";
                            } else if (route.name === "Paramètres") {
                                iconName = "ios-settings";
                            } else if (route.name === "Bot") {
                                iconName = "ios-rocket";
                            }

                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={color} />;
                        }
                    })}
                    tabBarOptions={{
                        activeTintColor: "tomato",
                        inactiveTintColor: "#fff",
                        style: {
                            backgroundColor: "#3A3E42",//color you want to change
                        }
                    }}
                >
                    <Tab.Screen name="Stats" component={Stats} />
                    <Tab.Screen name="Bot" component={Bot} />
                    <Tab.Screen name="Paramètres" component={Settings} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
