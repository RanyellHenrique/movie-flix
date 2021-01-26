import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, MovieDetails, Movies } from '../pages';
import { HeaderLeft, ButtonLogout } from '../core/components';
import { Text } from 'react-native';


const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <Stack.Navigator
            
            screenOptions={{
                headerTitle: "",
                headerStyle: {
                    backgroundColor: '#FFC700'
                },
                headerLeft: () => <HeaderLeft/>,
                headerRight: () => <ButtonLogout />,
                cardStyle: {
                    backgroundColor: '#525252'
                }
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Movies" component={Movies} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} />
        </Stack.Navigator>
    );
}

export default Routes;