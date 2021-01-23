import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image } from "react-native";
import { ButtonIcon, Navbar } from '../../core/components';
import draw from '../../core/assets/images/draw.png';
import styles from './styles';


const Home: React.FC = () => {

    const navigation = useNavigation();

    return (
        <>
            <Navbar />
            <View style={styles.container} >
                <Image
                    source={draw}
                    style={styles.image}
                />
                <Text style={styles.title}>Avalie filmes</Text>
                <Text style={styles.subTitle}>Diga o que você achou do seu {'\n'} filme favorito</Text>
                <ButtonIcon action={() => navigation.navigate('Login')} />
            </View>
        </>
    );
}

export default Home;