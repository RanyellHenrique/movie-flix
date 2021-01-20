import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: '80%'
    },
    button: {
        height: 50,
        backgroundColor: '#FFC700',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        width: '85%'
    },
    iconContainer: {
        backgroundColor: '#9A7D0A',
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    text: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 22
    }
});

export default styles;