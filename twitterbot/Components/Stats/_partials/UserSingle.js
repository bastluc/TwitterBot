import React from 'react';
import {StyleSheet, View, ActivityIndicator, Dimensions } from "react-native";
import { Image, Text } from "react-native-elements";
import { getTweetsFromUser } from "../../../API/Twitter/Users";

export default class UserSingle extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        tweets : []
    }



    render(){
        const user = this.props.route.params.user;
        this.props.navigation.setOptions({ title: user.name })
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                    source={{ uri: user.profile_image_url_https }}
                    style={styles.userImage}
                    PlaceholderContent={<ActivityIndicator />}
                    />
                    <View>
                        <Text h4 style={{fontWeight: "bold"}}>{user.name}</Text>
                        <Text h5>@{user.screen_name}</Text>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "tomato",
        flexDirection: "row"
    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 75,
        marginRight: 20
    },
    mapStyle: {
        flex: 0.25,
        width: Dimensions.get('window').width
    }
});