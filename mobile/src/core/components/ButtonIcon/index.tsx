import React from 'react';
import { View, TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native';
import styles from './styles';
import arrow from '../../assets/images/arrow.png';

type Props = {
    action: () => any;
    isLoading?: boolean;
}

const ButtonIcon: React.FC<Props> = ({ action, isLoading }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={action}>
                {isLoading ?
                    <View style={styles.loadingBtnContainer}>
                        <Text style={styles.text}>LOADING...</Text>
                        <ActivityIndicator size="small" color="#9A7D0A" />
                    </View>
                    :
                    <Text style={styles.text}>FAZER LOGIN</Text>
                }

            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <Image source={arrow} />
            </View>
        </View>

    );
}

export default ButtonIcon;