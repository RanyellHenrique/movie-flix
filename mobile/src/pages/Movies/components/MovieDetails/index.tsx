import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, ScrollView, Image, ActivityIndicator } from 'react-native';
import { Navbar } from '../../../../core/components';
import { makePrivateRequest } from '../../../../core/utils/requests';
import { Movie } from '../../../../core/utils/types';
import star from '../../../../core/assets/images/star.png';
import styles from './styles';

type Props = {
    route: {
        params: {
            id: number
        }
    }
}

const MovieDetails: React.FC<Props> = ({ route: { params: { id } } }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [movie, setMovie] = useState<Movie>();

    const getMovie = useCallback(() => {
        setIsLoading(true);
        makePrivateRequest({ url: `/movies/${id}` })
            .then(res => setMovie(res.data))
            .catch(err => console.warn(err))
            .finally(() => setIsLoading(false));
    }, [])

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <>
            <Navbar />
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
                    <View style={styles.cardReviews}>
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