import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const DetalhesContato = (props) => {
    
    return (
        <View style={styles.container}>
            <View>
                <Image source={{uri: props.route.params.foto}} style={styles.imagem}/>
            </View>
            <Text style={styles.text}>Nome: {props.route.params.nome}</Text>
            <Text style={styles.text}>Telefone: {props.route.params.telefone}</Text>
        </View>
    );
}




const styles = StyleSheet.create ({
    imagem: {
        width: 100,
        height: 100,
        borderRadius: 150,
        borderWidth: 1,
        borderColor: Colors.black,
        
        marginBottom: 40
    },
    container: {
        marginTop: 35,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.primary,
        width: '85%',
        padding: 50,
        borderRadius: 45
    },
    text: {
        marginTop: 30,
        fontSize: 40,
        color: Colors.black
    }
})


export default DetalhesContato;