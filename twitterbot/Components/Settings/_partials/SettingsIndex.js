import React from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";

export default class SettingsIndex extends React.Component {

    constructor(props) {
        super(props)
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
            <View>
                {
                    this.settingsItems.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.name}
                            leftIcon={<Ionicons
                                name={item.icon}
                                size={15}
                                color={"tomato"} />}
                            bottomDivider
                            chevron
                        />
                    ))
                }
            </View>
        );
    }
}