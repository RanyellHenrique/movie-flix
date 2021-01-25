import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1
    },
    cardMovie: {
        marginHorizontal: '3%',
        backgroundColor: '#6C6C6C',
        borderRadius: 20,
        elevation: 5,
        paddingTop: 20,
        marginTop: '3%'
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 33,
        paddingLeft: '5%'
    },
    image: {
        width: '100%',
        height: 220,
        marginVertical: 15
    },
    infoContainer: {
        width: '100%',
        paddingHorizontal: '5%',
        paddingBottom: '5%'
    },
    year: {
        color: '#FFC700',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 33,
        letterSpacing: -0.015
    },
    subTitle: {
        color: '#9E9E9E',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 25,
        marginBottom: '4%'
    },
    textTitle: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 30,
        marginBottom: 5
    },
    textContent: {
        borderWidth: 1,
        borderColor: '#BFBFBF',
        borderRadius: 20,
        paddingVertical: '3%',
        paddingHorizontal: '4%'
    },
    text: {
        color: '#9E9E9E',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'justify',
    },
    cardReviews: {
        marginHorizontal: '3%',
        backgroundColor: '#6C6C6C',
        borderRadius: 20,
        elevation: 5,
        padding: '5%',
        marginTop: '3%'
    },
    usernameContainer: {
        flexDirection: 'row',
        marginLeft: '4%',
        alignItems: 'center',
        marginBottom: '1%'
    },
    usernameText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,
        marginLeft: '2%'
    },
    reviewContainer: {
      marginTop: '5%'  
    }
});

export default styles;