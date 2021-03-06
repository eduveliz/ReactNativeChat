import React from 'react';
import {AsyncStorage, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import User from "../User";

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    state = {
        phone: "",
        name: "",
    };

    changeValues = key => val => {
        this.setState({[key]: val})
    };

    submitForm = async () => {
        if (this.state.phone.length < 8) {
            alert("bad Number")
        } else if (this.state.name.length < 3) {
            alert("bad Name")
        } else {
            await AsyncStorage.setItem("userPhone", this.state.phone);
            User.phone = this.state.phone;
            this.props.navigation.navigate('App');
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Enter a Number"
                    keyboardType="number-pad"
                    style={styles.input}
                    value={this.state.phone}
                    onChangeText={this.changeValues("phone")}
                />
                <TextInput
                    placeholder="Enter a Name"
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={this.changeValues("name")}
                />
                <TouchableOpacity onPress={this.submitForm}>
                    <Text style={styles.btnEnter}>Enter</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        width: "90%",
        marginBottom: 10,
        borderRadius: 5,
    },
    btnEnter: {
        color: "#5859cc",
        fontSize: 20
    }
});
