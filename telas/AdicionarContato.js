import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

import { useDispatch } from 'react-redux';
import * as contactActions from '../store/ContactActions';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function AdicionarContato (props) {

    const [nome, setNome] = useState ('');
    const [telefone, setTelefone] = useState ('');
  
    const dispatch = useDispatch ();

    const addName = (name) => {
        setNome (name);
        
    }

    const addFone = (fone) => {
        setTelefone (fone);
    }

 
    const addContact = () => {
        
        dispatch (contactActions.addNewContact (nome,  telefone));
        props.navigation.goBack ();
    }

    return (
        <View style={styles.container}> 
            <View style={styles.controls}>
                <Text style={{color: Colors.r, marginBottom: 12}}>Adicionar Contato </Text>
                <TextInput
                    placeholder="Nome"
                    placeholderTextColor={Colors.primary}
                    value={nome}
                    style={styles.input}
                    onChangeText={addName}
                />
                <TextInput 
                    placeholder="Telefone"
                    placeholderTextColor={Colors.primary}
                    value={telefone}
                    style={styles.input}
                    onChangeText={addFone}
                />
               
                <Button 
                    title="Adicionar"
                    color={Colors.black}
                    onPress={addContact}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex:1,
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    controls: {
        backgroundColor: Colors.darkBlue,
        padding: 10,
        borderRadius: 15
    },
    input: {
        borderBottomWidth: 1.5,
        borderColor: Colors.darkPurple,
        width: '98%',
        color: Colors.lightPurple,
        padding: 5,
        marginBottom: 5
    }
})