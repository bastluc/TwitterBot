import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { Text, Button, Divider } from "react-native-elements";

export default class BotMenu extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Button
                    buttonStyle={styles.buttons}
                    onPress={() => this.props.navigation.navigate("BotPostAuto")}
                    icon={
                        <Ionicons
                            name={"ios-redo"}
                            size={15}
                            color={"white"} />
                    }
                    title=" Créer un bot de post automatique"
                />
                <Button
                    buttonStyle={styles.buttons}
                    onPress={() => alert("il y a rien ici pour le moment")}
                    icon={
                        <Ionicons
                            name={"ios-at"}
                            size={15}
                            color={"white"} />
                    }
                    title=" Créer un bot de réponse automatique"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        padding: 30,
    },
    buttons: {
        backgroundColor: "tomato"
    },
})