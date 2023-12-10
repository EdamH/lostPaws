import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE5E9',
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: 20
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
        fontSize: 16
    },
    secondaryText: {
        color: '#B2B2B2',
        // textAlign: 'right'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    },
    
    
})