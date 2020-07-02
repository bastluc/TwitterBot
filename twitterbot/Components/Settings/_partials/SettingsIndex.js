import React from "react";
import {StyleSheet,View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";

export default class SettingsIndex extends React.Component {

    constructor(props) {
        super(props);
        this.settingsItems = [
            {
                name: "Statistiques",
                icon: "ios-analytics"
            },
            {
                name: "Bot",
                icon: "ios-rocket"
            }
        ];
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>Aucun paramètres requis pour le moment.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});