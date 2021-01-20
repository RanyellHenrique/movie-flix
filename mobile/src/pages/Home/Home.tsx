import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, TouchableOpacity } from "react-native";


const Home: React.FC = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text> Home</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
            >
                <Text>Click aqui</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;