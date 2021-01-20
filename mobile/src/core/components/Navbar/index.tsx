import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Navbar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
               <Text style={styles.title}>MovieFlix</Text> 
            </View>
        </View>
    );
}

export default Navbar;