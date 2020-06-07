import React from "react";
import { StyleSheet, View, TextInput, Picker, TouchableOpacity, Switch, Alert } from "react-native";
import { Text, Button, Divider } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";
import twitter from "react-native-simple-twitter";

export default class BotPostAuto extends React.Component {

    constructor(props) {
        super();
        this.state = {
            botName: "",
            tweet: "",
            displayTime: false,
            interval: "",
            intervalId: "",
        };
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    startBot() {
        // this.sendTweet();
        // let intervalId = setInterval(this.sendTweet, 30000);
        // this.setState({ intervalId: intervalId });
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

    sendTweet() {
        twitter.setConsumerKey("QZEtRk1FreVFoOcjX7xFTP77I", "hSCb8vF75rfW5wovq4KcF3PXHR0Py5Nr9qmpxzNdWc00kXE0Fe");
        twitter.setAccessToken("1300498070-HiIP7UIJp8gNFBJmqzYkc44T4Ks9aeDRHyjoe49", "tzdfPyj7iX4x9m0VmoqdgYXddPxwy8O4H4vP1eah95ua2");

        let tweet = "";
        if (this.state.displayTime) {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            tweet += "[" + hours + ":" + minutes + ":" + seconds + "] ";
        }


        tweet += this.state.tweet;

        twitter.api("POST", "statuses/update.json", { status: tweet })
    }

    handleBotNameChange = botName => {
        this.setState({ botName });
    }

    handlePickerChange = interval => {
        this.setState({ interval });
    }

    handleSwitchChange = displayTime => {
        this.setState({ displayTime });
    }

    handleTweetChange = tweet => {
        this.setState({ tweet });
    }

    render() {
        return (
            <View>
                <Text h2>Bot</Text>

                <TextInput placeholder="Nom de votre bot" value={this.state.botName} onChangeText={this.handleBotNameChange} style={styles.input} />
                <TextInput placeholder="Votre tweet" value={this.state.tweet} onChangeText={this.handleTweetChange} style={styles.input} />
                <View style={styles.switchView}>
                    <Text style={{ fontWeight: "bold" }}>Afficher l'heure dans vos tweet</Text>
                    <Switch
                        value={this.state.displayTime}
                        onValueChange={this.handleSwitchChange}
                    />
                </View>
                <TouchableOpacity style={styles.picker}>
                    <Picker
                        selectedValue={this.state.interval}
                        onValueChange={this.handlePickerChange}
                        prompt='Intervalle entre chaque tweet de votre bot'
                    >
                        <Picker.Item label="1 minute" value="60000" />
                        <Picker.Item label="5 minutes" value="300000" />
                        <Picker.Item label="15 minutes" value="900000" />
                        <Picker.Item label="30 minutes" value="1800000" />
                        <Picker.Item label="1 heure" value="3600000" />
                        <Picker.Item label="24 heures" value="86400000" />
                    </Picker>

                </TouchableOpacity>

                <Button
                    buttonStyle={styles.buttons}
                    onPress={() => this.startBot()}
                    icon={
                        <Ionicons
                            name={"ios-redo"}
                            size={15}
                            color={"white"} />
                    }
                    title=" Bot envoi auto"
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