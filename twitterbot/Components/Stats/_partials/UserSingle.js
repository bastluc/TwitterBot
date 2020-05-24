import React from "react";
import {connect} from "react-redux";
import {StyleSheet, View, ActivityIndicator, Dimensions, TouchableOpacity } from "react-native";
import { Image, Text } from "react-native-elements";
import { Icon } from "react-native-elements";
import { getTweetsFromUser } from "../../../API/Twitter/Users";

class UserSingle extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        tweets : [],
        infavorites: false
    }

    componentDidMount(){
        getTweetsFromUser(this.props.route.params.user.id).then(data => {
            this.setState({tweets: data});
        });
        if(this.props.favoritesUsers.includes(this.props.route.params.user.screen_name)){
            this.setState({infavorites: true});
        }
    }

    _favoriteStyle(){
        if(this.state.infavorites){
            return "tomato";
        }
        else {
            return "white";
        }
    }

    _toggleFavorite(){
        if(this.state.infavorites){
            const action = {type: "REMOVE_USER", value: this.props.route.params.user.screen_name};
            this.props.dispatch(action);
            this.setState({infavorites: false});
        }
        else {
            const action = {type: "ADD_USER", value: this.props.route.params.user.screen_name};
            this.props.dispatch(action);
            this.setState({infavorites: true});
        }
    }

    render(){
        const user = this.props.route.params.user;
        const profilImage = user.profile_image_url_https.slice(0, -11)+".jpg";
        this.props.navigation.setOptions(
            { 
                title: user.name,
                headerRight: () => (
                    <TouchableOpacity 
                        style={{marginRight: 10}}
                        onPress={() => 
                        {
                            this.props.navigation.navigate("AddUser");
                        }
                        }
                    >
                        <Icon
                            name='star'
                            type='font-awesome'
                            color={this._favoriteStyle()}
                            onPress={() => this._toggleFavorite()}
                        />
                    </TouchableOpacity>
                )
            }
        );
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={{ uri: profilImage }}
                        style={styles.userImage}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <View>
                        <Text h4 style={{fontWeight: "bold"}}>{user.name}</Text>
                        <Text h5>@{user.screen_name}</Text>
                    </View>
                </View>
                <View>
                    <Text>Nombre de tweets : {user.statuses_count}</Text>
                </View>
            </View>
        );
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
        width: Dimensions.get("window").width
    }
});

function mapStateToProps(state){
    return {favoritesUsers : state.users};
}
export default connect(mapStateToProps)(UserSingle);