import React from "react";
import {connect} from "react-redux";
import {StyleSheet, ScrollView, View, ActivityIndicator, Dimensions, TouchableOpacity, Alert } from "react-native";
import { Image, Text, Icon  } from "react-native-elements";
import { getTweetsFromUser } from "../../../API/Twitter/Users";
import moment from "moment";
import "moment/locale/fr";

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
            Alert.alert(
                "",
                "Êtes-vous sûr de vouloir supprimer @"+this.props.route.params.user.screen_name+" de vos favoris ?",
                [
                    {
                        text: "Oui",
                        onPress: () => {
                            const action = {type: "REMOVE_USER", value: this.props.route.params.user.screen_name};
                            this.props.dispatch(action);
                            this.setState({infavorites: false});
                        }
                    },
                    {
                        text: "Annuler"
                    }
                ]
            );
        }
        else {
            const action = {type: "ADD_USER", value: this.props.route.params.user.screen_name};
            this.props.dispatch(action);
            this.setState({infavorites: true});
        }
    }

    render(){
        const user = this.props.route.params.user;
        moment.locale("fr");
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
                            size={20}
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
                <ScrollView style={{paddingTop: 17, paddingLeft: 12, paddingRight: 12}}>
                    <View style={styles.statItem}>
                        <View style={styles.iconContainer}>
                            <Icon 
                                type="font-awesome"
                                name="hourglass"
                                color="#000"
                            />
                        </View>
                        <View style={{marginLeft: 17}}>
                            <Text style={{fontSize: 17, fontWeight: "bold", marginBottom: 6}}>Date de création</Text>
                            <Text>{moment(user.created_at).format("LLLL")}</Text>
                        </View>
                    </View>
                    <View style={styles.statItem}>
                        <View style={styles.iconContainer}>
                            <Icon 
                                type="font-awesome"
                                name="twitter"
                                color="#000"
                            />
                        </View>
                        <View style={{marginLeft: 17}}>
                            <Text style={{fontSize: 17, fontWeight: "bold", marginBottom: 6}}>Tweets</Text>
                            <Text>{user.statuses_count}</Text>
                        </View>
                    </View>
                    <View style={styles.statItem}>
                        <View style={styles.iconContainer}>
                            <Icon 
                                type="font-awesome"
                                name="users"
                                color="#000"
                            />
                        </View>
                        <View style={{marginLeft: 17}}>
                            <Text style={{fontSize: 17, fontWeight: "bold", marginBottom: 6}}>Followers</Text>
                            <Text>{user.followers_count}</Text>
                        </View>
                    </View>
                    <View style={styles.statItem}>
                        <View style={styles.iconContainer}>
                            <Icon 
                                type="font-awesome-5"
                                name="handshake"
                                color="#000"
                            />
                        </View>
                        <View style={{marginLeft: 17}}>
                            <Text style={{fontSize: 17, fontWeight: "bold", marginBottom: 6}}>Abonnements</Text>
                            <Text>{user.followers_count}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ECEFF1"
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
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
    },
    statItem: {
        margin: 10,
        padding: 15,
        minHeight: 70,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 6
    },
    iconContainer: {
        width: 55,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderColor: "#000",
        borderWidth: 2,
        borderRadius:  30
    }
});

function mapStateToProps(state){
    return {favoritesUsers : state.users};
}
export default connect(mapStateToProps)(UserSingle);