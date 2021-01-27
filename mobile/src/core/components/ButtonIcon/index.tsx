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
        <TouchableOpacity
            style={styles.container}
            onPress={action}
        >
            <View style={styles.content} >
                {isLoading
                    ?
                    <View style={styles.loadingBtnContainer}>
                        <Text style={styles.text}>LOADING...</Text>
                        <ActivityIndicator size="small" color="#9A7D0A" />
                    </View>
                    :
                    <Text style={styles.text}>FAZER LOGIN</Text>
                }

            </View>
            <View style={styles.iconContainer}>
                <Image source={arrow} />
            </View>
        </TouchableOpacity>
    );
}

export default ButtonIcon;