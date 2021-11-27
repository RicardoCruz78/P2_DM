import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../Constants/Colors';


const styles = StyleSheet.create ({
    contactItem: {
        borderBottomColor: '#20B2AA',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    nome: {
        color: 'red',
        fontSize: 18,
        marginBottom: 5
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#20B2AA',
        borderColor: Colors.primary,
        borderWidth: 1
    },
})

export default function ContactItem (props) {
    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.contactItem}>
            <Image style={styles.image} source={{uri: props.foto}} />
            <View style={styles.info}>
                <Text style={styles.nome}>{props.nome}</Text>
            </View>
        </TouchableOpacity>
    );
}
