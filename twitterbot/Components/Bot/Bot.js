import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from 'react-native-vector-icons';

export default class Bot extends React.Component {

    render() {
        return (
            <View>
                <Text>Bot</Text>
                <Button
                    buttonStyle={styles.buttons}
                    icon={
                        <Ionicons
                            name={"ios-chatbubbles"}
                            size={15}
                            color={"white"} />
                    }
                    containerSitle="Bot répondeur auto."
                />
                <Button
                    buttonStyle={styles.buttons}
                    title="Bot envoi auto."
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: "tomato"
    }
})