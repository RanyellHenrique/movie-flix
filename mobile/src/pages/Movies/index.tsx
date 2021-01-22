import React, { useEffect, useState } from 'react';
import { Text, View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Navbar } from '../../core/components';
import { makePrivateRequest } from '../../core/utils/requests';
import { MovieResponse } from '../../core/utils/types';
import MovieCard from './components/MovieCard';
import styles from './styles';

const Movies = () => {

    const [movies, setMovies] = useState<MovieResponse>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        makePrivateRequest({ url: '/movies' })
            .then(res => setMovies(res.data))
            .catch(err => console.warn(err));
    }, []);

    return (
        <>
            <Navbar />
            <ScrollView style={styles.container}>
                {
                    movies && movies.content.map(movie => <MovieCard movie={movie} key={movie.id}/>)
                }
            </ScrollView>
        </>
    );

}

export default Movies;