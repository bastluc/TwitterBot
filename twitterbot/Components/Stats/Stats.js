import React from 'react'
import {StyleSheet, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon} from 'react-native-elements'


export default class Stats extends React.Component {
    render(){
        const users = [
            {
                name: "Mathieu Kassovitz",
                username: "mathieu_k",
                image : "https://www.profil.fr/wp-content/uploads/2019/05/Laurent-LOUVION.jpg"
            },
            {
                name: "Orelsan",
                username: "orelsan",
                image : "https://img.discogs.com/VLPHzxRLrgevFz8QNJmb8x0L_nA=/600x681/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-1409627-1544261061-2270.jpeg.jpg"
            }
        ];
        return(
            <ScrollView>
                {
                    users.map((u, index) => (
                        <ListItem
                            key={index}
                            leftAvatar={{ source: { uri: u.image } }}
                            title={u.name}
                            subtitle={"@"+u.username}
                            bottomDivider
                            subtitleStyle={{ color: 'tomato' }}
                            chevron={{ color: 'tomato' }}
                            onPress={() => {this.props.navigation.navigate("UserSingle", {user: users[index]})}}
                        />
                    ))
                }
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})