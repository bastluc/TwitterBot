import React from 'react'
import { View } from 'react-native'
import { ListItem } from 'react-native-elements'

export default class SettingsIndex extends React.Component {

    constructor(props) {
        super(props)
        this.settingsItems = [
            {
                name: "Statistiques",
                icon: "rocket"
            },
            {
                name: "Bot",
                icon: "rocket"
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
                            leftIcon={{ name: item.icon }}
                            bottomDivider
                            chevron
                        />
                    ))
                }
            </View>
        );
    }
}