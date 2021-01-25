import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from "react-native";
import { Navbar } from '../../core/components';
import { makePrivateRequest } from '../../core/utils/requests';
import { Genre, MovieResponse } from '../../core/utils/types';
import MoviesList from './components/MoviesList';
import GenreFilter from './components/GenreFilter';

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
            size: 2,
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
            <Navbar />
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
                : <ActivityIndicator size='large' color="yellow" />
            }
        </>
    );

}

export default Movies;