import React, { useState } from "react";
import { View, TouchableOpacity, Modal, ScrollView, Text, Image } from "react-native";
import { Genre } from "../../../core/utils/types";
import styles from "../styles";
import arrow from '../../../core/assets/images/arrow-bottom.png';

type Props = {
    genres: Genre[];
    handleGenre: Function;
    genre?: Genre;
}


const GenreFilter: React.FC<Props> = ({ genres, genre, handleGenre }) => {
    const [showGenres, setShowGenres] = useState(false);

    return (
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
                            genres?.map(item =>
                                <TouchableOpacity
                                    onPress={() => {
                                        setShowGenres(!showGenres);
                                        handleGenre(item);
                                    }}
                                    style={item == genre ? styles.modalActive : styles.modalItem}
                                    key={item.id}
                                >
                                    <Text style={styles.modalItemText}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
}

export default GenreFilter;