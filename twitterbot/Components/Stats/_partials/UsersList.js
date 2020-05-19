import React from 'react'
import {StyleSheet, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon} from 'react-native-elements'
import {getUsers} from '../../../API/Users'

export default class UsersList extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        users: []
    }

    componentDidMount(){
        getUsers(25).then(data => {
            this.setState({users: data.results})
        })
    }

    render(){
        return(
            <ScrollView>
                {
                    this.state.users.map((u, index) => (
                        <ListItem
                            key={index}
                            leftAvatar={{ source: { uri: u.picture.thumbnail } }}
                            title={u.name.first+" "+u.name.last}
                            subtitle={"@"+u.login.username}
                            bottomDivider
                            subtitleStyle={{ color: 'tomato' }}
                            chevron={{ color: 'tomato' }}
                            onPress={() => {this.props.navigation.navigate("UserSingle", {user: u})}}
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