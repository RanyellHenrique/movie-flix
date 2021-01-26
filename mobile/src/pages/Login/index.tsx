import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, Alert } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ButtonIcon } from '../../core/components';
import eyesOpened from '../../core/assets/images/eyes-opened.png';
import eyesClosed from '../../core/assets/images/eyes-closed.png';
import styles from './styles';
import { useForm, Controller } from 'react-hook-form';
import { makeLogin, LoginData } from '../../core/utils/requests';
import { setAsysncKeys } from '../../core/utils/auth';


const Login: React.FC = () => {

    const navigation = useNavigation();
    const [hidePassword, setHidePassword] = useState(true);
    const { handleSubmit, control, errors } = useForm<LoginData>();
    const [isLoading, setIsLoading] = useState(false);



    const onSubmit = (data: LoginData) => {
        setIsLoading(true);
        makeLogin(data)
            .then(res => {
                setAsysncKeys(res.data);
                navigation.navigate('Movies');
            })
            .catch(() => Alert.alert('Email ou/e senha inválidos'))
            .finally(() => setIsLoading(false));
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>LOGIN</Text>
                <View style={styles.inputContainer}>
                    <Controller
                        name="username"
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <TextInput
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder="Email"
                                style={styles.inputEmail}
                            />
                        )}
                        rules={{
                            required: "Campo obrigatório",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                            }
                        }}
                        defaultValue=""
                    />
                    {errors.username && <Text style={styles.textError} >{errors.username.message}</Text>}
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputPasswordContainer}>
                        <Controller
                            name="password"
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <TextInput
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    placeholder="Senha"
                                    style={styles.inputPassword}
                                    secureTextEntry={hidePassword}
                                />
                            )}
                            rules={{
                                required: true,
                                validate: (value) => { return !!value.trim() }
                            }}
                            defaultValue=""
                        />
                        <TouchableOpacity
                            style={styles.btnEyes}
                            onPress={() => setHidePassword(!hidePassword)}
                        >
                            <Image source={hidePassword ? eyesClosed : eyesOpened} />
                        </TouchableOpacity>
                    </View>
                    {errors.password && <Text style={styles.textError} >Campo obrigatório</Text>}
                </View>
                <ButtonIcon action={handleSubmit(onSubmit)} isLoading={isLoading} />
            </View>
        </>
    );
}

export default Login;