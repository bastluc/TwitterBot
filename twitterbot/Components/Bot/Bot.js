import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Text, Button } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";
import twitter from "react-native-simple-twitter";

export default class Bot extends React.Component {

    constructor(props) {
        super();
        this.state = {
            tweet: "",
            intervalId: ""
        };
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    startBot() {
        this.sendTweet();
        let intervalId = setInterval(this.sendTweet, 30000);
        this.setState({intervalId: intervalId});
    }

    sendTweet() {
        twitter.setConsumerKey("QZEtRk1FreVFoOcjX7xFTP77I", "hSCb8vF75rfW5wovq4KcF3PXHR0Py5Nr9qmpxzNdWc00kXE0Fe");
        twitter.setAccessToken("1300498070-HiIP7UIJp8gNFBJmqzYkc44T4Ks9aeDRHyjoe49", "tzdfPyj7iX4x9m0VmoqdgYXddPxwy8O4H4vP1eah95ua2");

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let tweet = "[" + hours + ":" + minutes + ":"+ seconds +"] " + this.state.tweet;

        twitter.api("POST", "statuses/update.json", { status: tweet })
    }

    handleTweetChange = tweet => {
        this.setState({tweet: tweet});
    }

    render() {
        return (
            <View>
                <Text h2>Bot</Text>
                <TextInput placeholder="Votre tweet" value={this.state.tweet} onChangeText={this.handleTweetChange} style={styles.input} />

                {/* <Button
                    buttonStyle={styles.buttons}
                    icon={
                        <Ionicons
                            name={"ios-chatbubbles"}
                            size={15}
                            color={"white"} />
                    }
                    title=" Bot répondeur auto"
                /> */}


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
    input: {
        backgroundColor: '#ececec',
        borderRadius: 10,
        padding: 10,
        margin: 20,
    },
})