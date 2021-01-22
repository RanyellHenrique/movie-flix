import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Movie } from '../../../core/utils/types';

type Props = {
    movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: movie.imgUri }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.year}>{movie.year}</Text>
                <Text style={styles.subTitle}>{movie.subTitle}</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>VER DETALHES</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default MovieCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6C6C6C',
        paddingVertical: 20,
        borderRadius: 10,
        marginBottom: '3%',
        elevation: 4
    },
    image: {
        width: '100%',
        height: 200
    },
    infoContainer: {
        paddingHorizontal: '3%',
        paddingTop: '3%'
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25
    },
    year: {
        color: '#FFC700',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19
    },
    subTitle: {
        color: '#CDCDCD',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
        marginBottom: '2%'
    },
    btn: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#BFBFBF',
        borderRadius: 10,
    },
    btnText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    }
});