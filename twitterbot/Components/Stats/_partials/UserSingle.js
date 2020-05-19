import React from 'react';
import {StyleSheet, View, ActivityIndicator, Dimensions } from 'react-native';
import { Image, Text } from 'react-native-elements';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

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
                <MapView 
                style={styles.mapStyle}
                region={{
                    latitude: parseInt(user.location.coordinates.latitude),
                    longitude: parseInt(user.location.coordinates.longitude),
                    latitudeDelta: 100.0922,
                    longitudeDelta: 100.0421
                }}
                >
                    <Marker 
                        coordinate={{latitude: parseInt(user.location.coordinates.latitude), longitude: parseInt(user.location.coordinates.longitude)}}
                    />
                </MapView>
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