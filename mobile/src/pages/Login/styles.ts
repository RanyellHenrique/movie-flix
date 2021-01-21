import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    inputEmail: {
        height: 50,
        width: '80%',
        borderWidth: 1,
        borderColor: '#BFBFBF',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#FFF',
        marginBottom: 30
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
        width: '80%',
        borderWidth: 1,
        borderColor: '#BFBFBF',
        borderRadius: 11,
        marginBottom: 35

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
    }
});

export default styles;