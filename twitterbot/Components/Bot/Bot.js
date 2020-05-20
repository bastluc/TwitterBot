import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from 'react-native-vector-icons/Ionicons';

export default class Bot extends React.Component {

    render() {
        return (
            <View>
                <Text>Bot</Text>
                <Button
                    icon={
                        <Ionicons
                            name={"ios-chatbubbles"}
                            size={15}
                            color={"white"} />
                    }
                    title="Bot répondeur auto."
                />
                <Button
                    title="Bot envoi auto."
                />
            </View>
        );
    }

}