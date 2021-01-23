import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, Movies } from '../pages';


const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <Stack.Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: '#525252'
                }
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Movies" component={Movies} />
        </Stack.Navigator>
    );
}

export default Routes;