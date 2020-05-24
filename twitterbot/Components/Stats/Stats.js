import React from "react";
import { StyleSheet, TouchableOpacity} from "react-native";
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";
import UsersList from "./_partials/UsersList";
import UserSingle from "./_partials/UserSingle";
import { Ionicons } from "react-native-vector-icons";
import UserSearch from "./_partials/UserSearch";

const Stack = createStackNavigator();

export default class Stats extends React.Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="UsersList" screenOptions={
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
                <Stack.Screen name="UsersList" component={UsersList} options={
                    { 
                        title: "Utilisateurs",
                        headerRight: () => (
                            <TouchableOpacity 
                                style={{marginRight: 10}}
                                onPress={() => 
                                {
                                    this.props.navigation.navigate("AddUser");
                                }
                                }
                            >
                                <Ionicons
                                    name={"ios-search"}
                                    size={23}
                                    color={"tomato"}
                                    
                                />
                            </TouchableOpacity>
                        ) 
                    }
                } />
                <Stack.Screen name="UserSingle" component={UserSingle} />
                <Stack.Screen name="AddUser" component={UserSearch} options={
                    {
                        title: "Rechercher"
                    }
                }/>
            </Stack.Navigator>
        );
    }

}