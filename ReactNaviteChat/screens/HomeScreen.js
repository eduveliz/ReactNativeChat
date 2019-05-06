import React from 'react';
import {AsyncStorage, Text, TouchableOpacity, View} from 'react-native';
import User from "../User";

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        Title: "Chats",
    };

    _logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    render() {
        return (
            <View>
                <Text>
                    {User.phone}
                </Text>
                <TouchableOpacity onPress={this._logOut}>
                    <Text>LogOut</Text>
                </TouchableOpacity>
            </View>
        );
    }
};



