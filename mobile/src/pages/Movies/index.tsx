import React, { useEffect } from 'react';
import { Text, View } from "react-native";
import { Navbar } from '../../core/components';
import { makePrivateRequest } from '../../core/utils/requests';

const Movies = () => {

    useEffect(() => {
        makePrivateRequest({ url: '/movies' })
            .then(res => console.warn(res.data))
            .catch(err => console.warn(err));
    }, []);

    return (
        <>
            <Navbar />
            <View>
                <Text>Movies</Text>
            </View>
        </>
    );

}

export default Movies;