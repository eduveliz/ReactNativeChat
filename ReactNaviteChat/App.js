import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AuthLoadingScreen from "./screens/AuthLoadingScreen";

const AppStack = createStackNavigator({Home: HomeScreen});
const AuthStack = createStackNavigator({login: LoginScreen});

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));