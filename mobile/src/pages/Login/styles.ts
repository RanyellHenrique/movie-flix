import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    inputEmail: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#BFBFBF',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#FFF'
    },
    title: {
        color: '#FFF',
        fontSize: 30,
        lineHeight: 41,
        textAlign: 'center',
        marginBottom: 50,
        marginTop: 90
    },
    inputPasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        borderWidth: 1,
        borderColor: '#BFBFBF',
        borderRadius: 11
    },
    inputPassword: {
        height: 50,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#FFF',
        width: '80%',
        padding: 10
    },
    btnEyes: {
        height: 50,
        backgroundColor: '#FFF',
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    textError: {
        color: '#FFC700',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'center'
    },
    inputContainer: {
        marginBottom: '10%',
        width: '80%'
    }
});

export default styles;