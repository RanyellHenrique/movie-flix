import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, View } from "react-native";
import { makePrivateRequest } from '../../core/utils/requests';
import { Genre, MovieResponse } from '../../core/utils/types';
import MoviesList from './components/MoviesList';
import GenreFilter from './components/GenreFilter';
import styles from './styles';

export type PropsParams = {
    genreId?: number;
    page?: number;
}

const Movies: React.FC = () => {
    const [movies, setMovies] = useState<MovieResponse>();
    const [genres, setGenres] = useState<Genre[]>();
    const [genre, setGenre] = useState<Genre>();
    const [activePage, setActivePage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const getMovies = useCallback(() => {
        const moviesData = movies?.content ?? [];
        const params = {
            size: 8,
            genreId: genre?.id,
            page: activePage
        };
        makePrivateRequest({ url: '/movies', params })
            .then(res => {
                setMovies({
                    totalPages: res.data.totalPages,
                    content: [...moviesData, ...res.data.content]
                });
            })
            .catch(err => console.warn(err))
            .finally(() => setIsLoading(false));
    }, [activePage, genre]);

    const handleGenre = (genreFilter: Genre) => {
        if (genreFilter !== genre) {
            setMovies({
                content: [],
                totalPages: movies?.totalPages ?? 0
            });
            setGenre(genreFilter);
            setActivePage(0);
        }
    }

    const loadingPage = () => {
        setActivePage(activePage + 1);
    }

    useEffect(() => {
        getMovies();
    }, [getMovies]);


    useEffect(() => {
        makePrivateRequest({ url: '/genres' })
            .then(res => setGenres([{ id: 0, name: 'Todos' }, ...res.data]))
            .catch(err => console.warn(err));
    }, []);

    return (
        <>
            {movies?.content ?
                <MoviesList
                    movies={movies.content}
                    loadingPage={loadingPage}
                    listHeaderComponent={
                        <GenreFilter
                            genres={genres ? genres : []}
                            handleGenre={handleGenre}
                            genre={genre}
                        />
                    }
                />
                : <View style={styles.loadingContainer}>
                    <ActivityIndicator size='large' color="#FFC700" />
                </View>
            }
        </>
    );

}

export default Movies;