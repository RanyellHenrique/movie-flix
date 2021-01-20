import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';
import arrow from '../../assets/images/arrow.png';

type Props = {
    action: () => any;
}

const ButtonIcon: React.FC<Props> = ({ action }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={action}>
                <Text style={styles.text}>FAZER LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <Image source={arrow} />
            </View>
        </View>

    );
}

export default ButtonIcon;