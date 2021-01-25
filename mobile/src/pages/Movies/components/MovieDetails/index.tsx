import React from 'react';
import { Text, View } from 'react-native';
import { Navbar } from '../../../../core/components';

type Props = {
    route: { 
        params: {
            id: number
        } 
    }
}

const MovieDetails: React.FC<Props> = ({ route: { params: { id } } }) => {


    return (
        <>
            <Navbar />
            <View>
                <Text>MovieDetails{id}</Text>
            </View>
        </>
    );
}

export default MovieDetails; 