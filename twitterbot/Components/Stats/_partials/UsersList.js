import React, { useState } from "react";
import { ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import twitter from "react-native-simple-twitter";
import {connect} from 'react-redux'

class UsersList extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        users: []
    }

    componentDidMount(){
        twitter.setConsumerKey("QZEtRk1FreVFoOcjX7xFTP77I", "hSCb8vF75rfW5wovq4KcF3PXHR0Py5Nr9qmpxzNdWc00kXE0Fe");
        twitter.setAccessToken("1300498070-HiIP7UIJp8gNFBJmqzYkc44T4Ks9aeDRHyjoe49", "tzdfPyj7iX4x9m0VmoqdgYXddPxwy8O4H4vP1eah95ua2");

        this.props.users.map((u) => {
            twitter.api("GET", "users/show.json", { screen_name: u })
                .then(response => response)
                .then(data => {
                    this.setState(
                        {
                            users: [...this.state.users, data]
                        }
                    );
                })
                .catch(error => console.warn("error", error));
        });
    }

    render(){
        return(
            <ScrollView>
                {
                    this.state.users.map((u, index) => (
                        <ListItem
                            key={index}
                            leftAvatar={{ source: { uri: u.profile_image_url_https } }}
                            title={u.name}
                            subtitle={"@"+u.screen_name}
                            bottomDivider
                            subtitleStyle={{ color: "tomato" }}
                            chevron={{ color: "tomato" }}
                            onPress={() => {this.props.navigation.navigate("UserSingle", {user: u})}}
                        />
                    ))
                }
            </ScrollView>
        );
    }

}

function mapStateToProps(state){
    return {users : state.users};
}
export default connect(mapStateToProps)(UsersList);