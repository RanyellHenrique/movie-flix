import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, Alert } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ButtonIcon } from '../../core/components';
import eyesOpened from '../../core/assets/images/eyes-opened.png';
import eyesClosed from '../../core/assets/images/eyes-closed.png';
import styles from './styles';
import { useForm } from 'react-hook-form';
import { makeLogin, LoginData } from '../../core/utils/requests';
import { setAsysncKeys } from '../../core/utils/auth';


const Login: React.FC = () => {

    const navigation = useNavigation();
    const [hidePassword, setHidePassword] = useState(true);
    const { register, handleSubmit, setValue } = useForm<LoginData>();

    useEffect(() => {
        register('username');
        register('password');
    }, [register]);

    const onSubmit = (data: LoginData) => {
        makeLogin(data)
            .then(res => {
                setAsysncKeys(res.data);
                navigation.navigate('Movies');
            })
            .catch(err => console.warn(err));
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>LOGIN</Text>
                <TextInput
                    placeholder="Email"
                    style={styles.inputEmail}
                    onChangeText={text => {setValue('username', text)}}
                />
                <View style={styles.inputPasswordContainer}>
                    <TextInput
                        style={styles.inputPassword}
                        placeholder="Password"
                        secureTextEntry={hidePassword}
                        onChangeText={text => {setValue('password', text)}}
                    />
                    <TouchableOpacity
                        style={styles.btnEyes}
                        onPress={() => setHidePassword(!hidePassword)}
                    >
                        <Image source={hidePassword ? eyesClosed : eyesOpened} />
                    </TouchableOpacity>
                </View>
                <ButtonIcon action={handleSubmit(onSubmit)} />
            </View>
        </>
    );
}

export default Login;