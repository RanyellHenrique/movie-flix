import React from 'react';
import { FlatList } from "react-native";
import { Movie } from '../../../core/utils/types';
import styles from "../styles";
import MovieCard from "./MovieCard";

type Props = {
    movies: Movie[];
    loadingPage: () => void;
    listHeaderComponent: JSX.Element | null;
    listFooterComponent: JSX.Element | null;
}


const MoviesList: React.FC<Props> = ({ movies, loadingPage, listHeaderComponent, listFooterComponent }) => {
    return (
        <FlatList
            style={styles.container}
            data={movies}
            renderItem={({ item }) => <MovieCard movie={item} />}
            keyExtractor={(item) => String(item.id)}
            onEndReached={loadingPage}
            onEndReachedThreshold={0.1}
            ListHeaderComponent={listHeaderComponent}
            ListFooterComponent={listFooterComponent}
        />
    );
}

export default MoviesList;