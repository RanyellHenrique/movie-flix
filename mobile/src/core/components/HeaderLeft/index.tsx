import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import arrow from '../../../core/assets/images/arrow-back.png';

const HeaderLeft: React.FC = () => {
    const [routeName, setRouteName] = useState('');
    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        setRouteName(route.name);
    }, [route]);

    return (
        <View style={styles.titleContainer}>
            {
                (routeName === 'Login' || routeName === 'MovieDetails') &&
                <TouchableOpacity
                    onPress={() => navigation.navigate(`${routeName === 'Login' ? 'Home' : 'Movies'}`)}
                >
                    <Image source={arrow} />
                </TouchableOpacity>
            }
            <Text style={styles.title}>MovieFlix</Text>
        </View>
    );
}

export default HeaderLeft;