import React from 'react'
import {StyleSheet, View, ActivityIndicator } from 'react-native'
import { Image, Text } from 'react-native-elements';

export default class UserSingle extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const user = this.props.route.params.user;
        this.props.navigation.setOptions({ title: user.name.first+" "+user.name.last })
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                    source={{ uri: user.picture.large }}
                    style={styles.userImage}
                    PlaceholderContent={<ActivityIndicator />}
                    />
                    <View>
                        <Text h4 style={{fontWeight: "bold"}}>{user.name.first}</Text>
                        <Text h5>@{user.login.username}</Text>
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
    }
});