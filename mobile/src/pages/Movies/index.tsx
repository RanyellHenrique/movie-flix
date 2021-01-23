import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Modal, ActivityIndicator } from "react-native";
import { Navbar } from '../../core/components';
import { makePrivateRequest } from '../../core/utils/requests';
import { Genre, MovieResponse } from '../../core/utils/types';
import arrow from '../../core/assets/images/arrow-bottom.png';
import styles from './styles';
import MoviesList from './components/MoviesList';

const Movies = () => {

    const [movies, setMovies] = useState<MovieResponse>();
    const [genres, setGenres] = useState<Genre[]>();
    const [showGenres, setShowGenres] = useState(false);
    const [genre, setGenre] = useState<Genre>();
    const [activePage, setActivePage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleGenre = (genre: Genre) => {
        setGenre(genre);
        setShowGenres(!showGenres);
        const params = {
            size: 4,
            genreId: genre.id,
            page: 0
        };
        setIsLoading(true);
        makePrivateRequest({ url: '/movies', params })
            .then(res => setMovies(res.data))
            .catch(err => console.warn(err))
            .finally(() => setIsLoading(false));
    }

    const loadingPage = () => {
        setActivePage(activePage + 1);
    }

    useEffect(() => {
        const params = {
            page: activePage,
            size: 4,
            genreId: genre?.id
        };
        setIsLoading(true);
        makePrivateRequest({ url: '/movies', params })
            .then(res => setMovies({
                totalPages: res.data.totalPages,
                content: movies
                    ? movies?.content.concat(res.data.content)
                    : res.data.content
            }))
            .catch(err => console.warn(err))
            .finally(() => setIsLoading(false));
    }, [activePage]);


    useEffect(() => {
        makePrivateRequest({ url: '/genres' })
            .then(res => setGenres([{ id: 0, name: 'Todos' }, ...res.data]))
            .catch(err => console.warn(err));
    }, []);

    return (
        <>
            <Navbar />
            {movies &&
                <MoviesList
                    movies={movies.content}
                    loadingPage={loadingPage}
                    listHeaderComponent={
                        <View>
                            <View style={styles.genresContainer}>
                                <TouchableOpacity
                                    style={styles.genresBtn}
                                    onPress={() => setShowGenres(!showGenres)}
                                >
                                    <Text style={styles.genresText}>{genre ? `${genre.name}` : 'Escolha um Gênero'}</Text>
                                    <Image source={arrow} />
                                </TouchableOpacity>
                            </View>
                            <Modal
                                visible={showGenres}
                                animationType="fade"
                                transparent={true}
                                presentationStyle="overFullScreen"
                            >
                                <View style={styles.modalContainer}>
                                    <ScrollView style={styles.modalContent}>
                                        {
                                            genres?.map(genre =>
                                                <TouchableOpacity
                                                    onPress={() => handleGenre(genre)}
                                                    style={styles.modalItem}
                                                    key={genre.id}
                                                >
                                                    <Text style={styles.modalItemText}>
                                                        {genre.name}
                                                    </Text>
                                                </TouchableOpacity>
                                            )
                                        }
                                    </ScrollView>
                                </View>
                            </Modal>
                        </View>
                    }
                    listFooterComponent={
                        <View style={styles.loadingContainer}>
                            {
                                isLoading && <ActivityIndicator size="large" color='#FFC700' />
                            }
                        </View>
                    }
                />
            }
        </>
    );

}

export default Movies;