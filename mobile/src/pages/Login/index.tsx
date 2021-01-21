import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ButtonIcon, Navbar } from '../../core/components';
import eyesOpened from '../../core/assets/images/eyes-opened.png';
import eyesClosed from '../../core/assets/images/eyes-closed.png';
import styles from './styles';


const Login: React.FC = () => {

    const navigation = useNavigation();
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <>
            <Navbar />
            <View style={styles.container}>
                <Text style={styles.title}>LOGIN</Text>
                <TextInput
                    placeholder="Email"
                    style={styles.inputEmail}
                />
                <View style={styles.inputPasswordContainer}>
                    <TextInput
                        style={styles.inputPassword}
                        placeholder="Password"
                        secureTextEntry={hidePassword}
                    />
                    <TouchableOpacity
                        style={styles.btnEyes}
                        onPress={() => setHidePassword(!hidePassword)}
                    >
                        <Image source={hidePassword ? eyesClosed : eyesOpened} />
                    </TouchableOpacity>
                </View>
                <ButtonIcon action={() => {}} />
            </View>
        </>
    );
}

export default Login;