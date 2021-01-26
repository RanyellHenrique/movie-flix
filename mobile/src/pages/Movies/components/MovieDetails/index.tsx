import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, ScrollView, Image, ActivityIndicator, TextInput, TouchableOpacity, Alert } from 'react-native';
import { makePrivateRequest } from '../../../../core/utils/requests';
import { Movie } from '../../../../core/utils/types';
import star from '../../../../core/assets/images/star.png';
import styles from './styles';
import { useForm, Controller } from 'react-hook-form';
import { getSessionData, isMember } from '../../../../core/utils/auth';

type Props = {
    route: {
        params: {
            id: number
        }
    }
}

type FormState = {
    text: string;
    user: {
        id: number;
    };
    movieId: number;
}

const MovieDetails: React.FC<Props> = ({ route: { params: { id } } }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isSaveLoading, setIsSaveLoading] = useState(false);
    const [movie, setMovie] = useState<Movie>();
    const { handleSubmit, errors, control } = useForm<FormState>();
    const [isAuthorized, setIsAuthorized] = useState(false);


    const getMovie = useCallback(() => {
        setIsLoading(true);
        makePrivateRequest({ url: `/movies/${id}` })
            .then(res => setMovie(res.data))
            .catch(err => console.warn(err))
            .finally(() => setIsLoading(false));
    }, []);

    const onSubmit = async (data: FormState) => {
        setIsSaveLoading(true);
        const dataUser = await getSessionData();
        data = { ...data, user: { id: dataUser.userId }, movieId: Number(id) };
        makePrivateRequest({ method: 'POST', url: '/reviews', data: data })
            .then(() => {
                getMovie();
            })
            .catch(() => Alert.alert('Erro ao salvar a avaliação!'))
            .finally(() => setIsSaveLoading(false));
    }

    const authorization = async () => {
        const auth = await isMember();
        setIsAuthorized(auth);
    }

    useEffect(() => {
        getMovie();
    }, []);

    useEffect(() => {
        authorization()
    }, []);

    return (
        <>
            { isLoading ?
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#FFC700" />
                </View> :
                <ScrollView style={styles.container}>
                    <View style={styles.cardMovie}>
                        <Text style={styles.title}>{movie?.title}</Text>
                        <Image
                            source={{ uri: movie?.imgUri }}
                            style={styles.image}
                        />
                        <View style={styles.infoContainer}>
                            <Text style={styles.year}>{movie?.year}</Text>
                            <Text style={styles.subTitle}>{movie?.subTitle}</Text>
                            <Text style={styles.textTitle}>Sinopse</Text>
                            <View style={styles.textContent}>
                                <Text style={styles.text}>{movie?.synopsis}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <TextInput
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    multiline
                                    placeholder="Deixe sua avaliação aqui"
                                    style={styles.inputReview}
                                    editable={isAuthorized}
                                />
                            )}
                            name="text"
                            rules={{
                                required: true,
                                validate: (value) => { return !!value.trim() }
                            }}
                            defaultValue=""
                        />
                        {errors.text && <Text style={styles.textError} >Campo obrigatório.</Text>}
                        <TouchableOpacity
                            style={isAuthorized ? styles.saveReviewBtn : styles.saveReviewBtnDisable}
                            onPress={handleSubmit(onSubmit)}
                            disabled={!isAuthorized}
                        >
                            {isSaveLoading
                                ?
                                <View style={styles.loadingSaveReviewContainer}>
                                    <Text style={styles.saveReviewBtnText}>LOADING... </Text>
                                    <ActivityIndicator size="small" color="#9A7D0A" />
                                </View>
                                :
                                <Text style={isAuthorized ? styles.saveReviewBtnText : styles.saveReviewBtnTextDisable}>SALVAR AVALIAÇÂO</Text>
                            }

                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.textTitle}>Avaliações</Text>
                        <View>
                            {
                                movie?.reviews?.map(review =>
                                    <View style={styles.reviewContainer} key={review.id} >
                                        <View style={styles.usernameContainer}>
                                            <Image source={star} />
                                            <Text style={styles.usernameText} >{review.user.name}</Text>
                                        </View>
                                        <View style={styles.textContent}>
                                            <Text style={styles.text}>{review.text}</Text>
                                        </View>
                                    </View>
                                )
                            }
                        </View>
                    </View>
                </ScrollView>
            }

        </>
    );
}

export default MovieDetails; 