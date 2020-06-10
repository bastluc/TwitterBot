import React from "react";
import { StyleSheet, View, TextInput, Picker, TouchableOpacity, Switch, Alert } from "react-native";
import { Text, Button } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";
import twitter from "react-native-simple-twitter";

export default class BotPostAuto extends React.Component {

    constructor(props) {
        super();
        this.state = {
            type: 'reponse',
            botName: "",
            tweet: "",
        };
    }

    startBot() {
        Alert.alert(
            "Confirmation de votre bot",
            `Nom : ${this.state.botName}\nContenu : ${this.state.tweet}\nHeure : ${this.state.displayTime}\nIntervalle : ${this.state.interval}`,
            [
                {
                    text: "Oui",
                    onPress: () => {
                        this.props.route.params.addBot(this.state);
                        this.props.navigation.navigate("BotMenu");
                    }
                },
                {
                    text: "Annuler"
                }
            ]
        );
    }

    handleBotNameChange = botName => {
        this.setState({ botName });
    }

    render() {
        return (
            <View>
                <Text h2>Bot</Text>

                <TextInput placeholder="Nom de votre bot" value={this.state.botName} onChangeText={this.handleBotNameChange} style={styles.input} />

                <Button
                    buttonStyle={styles.buttons}
                    onPress={() => this.startBot()}
                    icon={
                        <Ionicons
                            name={"ios-redo"}
                            size={15}
                            color={"white"} />
                    }
                    title=" Bot réponse auto"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: "tomato"
    },
    switchView: {
        flex: 1,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#ececec',
        borderRadius: 10,
        padding: 10,
        margin: 20,
    },
    picker: {
        margin: 20,
        backgroundColor: '#ececec',
        borderRadius: 10,
    }
})