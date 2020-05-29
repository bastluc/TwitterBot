import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {connect} from "react-redux";
import twitter from "react-native-simple-twitter";
import { SearchBar, ListItem, Icon } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";

class UserSearch extends React.Component {

    state = {
        users: [],
        searchQuery: "",
        isLoading: false
    }

    _search(){
        if(this.state.searchQuery.length > 0){
            this.setState({isLoading: true});

            twitter.setConsumerKey("QZEtRk1FreVFoOcjX7xFTP77I", "hSCb8vF75rfW5wovq4KcF3PXHR0Py5Nr9qmpxzNdWc00kXE0Fe");
            twitter.setAccessToken("1300498070-HiIP7UIJp8gNFBJmqzYkc44T4Ks9aeDRHyjoe49", "tzdfPyj7iX4x9m0VmoqdgYXddPxwy8O4H4vP1eah95ua2");
    
            twitter.api("GET", "users/search.json", { q: this.state.searchQuery })
                .then(response => response)
                .then(data => {
                    this.setState(
                        {
                            users: data
                        }
                    );
                    this.setState({isLoading: false});
                })
                .catch(error => console.warn(error));
        }
        else {
            this.setState({isLoading: false});
            this.setState({users: []});
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={(text) => 
                    {
                        this.setState({searchQuery: text}, this._search);
                    }
                    }
                    value={this.state.searchQuery}
                    placeholder="Rechercher..."
                    autoCapitalize="none"
                    showLoading={this.state.isLoading}
                    onClear={() => {this.setState({users: []})}}
                />
                <ScrollView style={styles.usersScroll}>
                    {
                        this.state.users.map((u, index) => (
                            <ListItem
                                key={index}
                                leftAvatar={{ source: { uri: u.profile_image_url_https } }}
                                title={
                                    <View style={{flexDirection: "row", alignItems: "center"}}>
                                        <Text style={{marginRight: 5}}>{u.name}</Text>
                                        <Icon
                                            iconStyle={{display: u.verified ? "flex" : "none"}}
                                            type="octicon"
                                            name="verified"
                                            color="#00acee"
                                            size={13}
                                        />
                                    </View>
                                }
                                subtitle={"@"+u.screen_name}
                                bottomDivider
                                subtitleStyle={{ color: "tomato" }}
                                onPress={() => {this.props.navigation.navigate("UserSingle", {user: u})}}
                                chevron
                            />
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchContainer: {
        flex: 0.2,
        backgroundColor: "tomato",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20
    },
    input: {
        borderBottomColor: "#FFF",
    },
    usersScroll: {
        flex: 1,
        backgroundColor: "#fff"
    }
});

function mapStateToProps(state){
    return {users : state.users};
}
export default connect(mapStateToProps)(UserSearch);