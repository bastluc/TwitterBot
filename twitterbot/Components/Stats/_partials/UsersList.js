import React from "react";
import { ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import { searchUser } from "../../../API/Twitter/Users";

export default class UsersList extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        users: []
    }

    componentDidMount(){
        searchUser("bast_lucas").then(data => {
            console.warn(data);
            this.setState({users: data});
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