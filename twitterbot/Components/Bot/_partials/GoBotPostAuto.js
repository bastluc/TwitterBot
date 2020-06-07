import React from "react";
import { StyleSheet, View, Alert, Modal, TouchableHighlight, ActivityIndicator } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";
import twitter from "react-native-simple-twitter";

export default class GoBotPostAuto extends React.Component {

    constructor(props) {
        super();
        this.state = {
            modalVisible: false
        };
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    startBot() {
        // this.sendTweet();
        // let intervalId = setInterval(this.sendTweet, 30000);
        // this.setState({ intervalId: intervalId });
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

    render() {
        const { modalVisible } = this.state;

        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text h4 style={styles.modalText}>Bot lancé !</Text>
                            <Image
                                source={require("../../../assets/rocket.gif")}
                                style={{ width: 200, height: 200 }}
                                PlaceholderContent={<ActivityIndicator />}
                            />
                            <TouchableHighlight
                                style={{ ...styles.stopButton }}
                                onPress={() => {
                                    this.setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>STOP</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>


                <Text h2>{this.props.route.params.bot.botName}</Text>

                <View style={styles.paramsContainer}>
                    <Ionicons
                        name={"ios-hourglass"}
                        size={35}
                        color={"tomato"} />
                    <Text h4>  {this.props.route.params.bot.interval}</Text>
                </View>

                {this.props.route.params.bot.displayTime &&
                    <View style={styles.paramsContainer}>
                        <Ionicons
                            name={"ios-clock"}
                            size={35}
                            color={"tomato"} />
                        <Text h4>  OUI</Text>
                    </View>
                }

                <View style={styles.center}>
                    <Ionicons
                        name={"ios-text"}
                        size={35}
                        color={"tomato"} />
                    <Text h4>{this.props.route.params.bot.tweet}</Text>
                </View>

                <Button
                    buttonStyle={styles.buttons}
                    onPress={() => this.setModalVisible(true)}
                    icon={
                        <Ionicons
                            name={"ios-rocket"}
                            size={15}
                            color={"white"} />
                    }
                    title=" GO"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 30,
    },
    paramsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    center: {
        alignItems: 'center'
    },
    buttons: {
        backgroundColor: "tomato"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    stopButton: {
        backgroundColor: "red",
        borderRadius: 20,
        marginTop: 15,
        padding: 15,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
})