import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container :{
        flex: 1,
        padding: '2%'
    },
    genresContainer: {
        paddingHorizontal: '5%',
        paddingVertical: '4%',
        backgroundColor: '#6C6C6C',
        borderRadius: 10,
        marginBottom: '3%',
        elevation: 4,
    },
    genresBtn: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#9E9E9E',
        borderRadius: 10,
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '3%',
        flexDirection: 'row'
    },
    genresText: {
        color: '#FFF',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
    },
    modalContainer: {
        backgroundColor: "#00000033",
        alignItems: "center",
        justifyContent: "center",
        width: deviceWidth,
        height: deviceHeight,
    },
    modalContent: {
        width: '90%',
        marginVertical: "40%",
        backgroundColor: '#525252',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.85,
        elevation: 5
    },
    modalItem: {
        width: "100%",
        backgroundColor: '#6C6C6C',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        elevation: 5
    },
    modalItemText: {
        color: '#FFF',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
    },
    loadingContainer: {
        marginBottom: '2%'
    }
});

export default styles;