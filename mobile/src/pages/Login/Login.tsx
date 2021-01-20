import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, TouchableOpacity } from "react-native";


const Login: React.FC = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text> Login</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
            >
                <Text> Click aqui</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;