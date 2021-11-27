import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

//import ContactItem from "../components/ContactItem."
import ContactItem from '../components/ContactItem';

export default function ListaContatos (props) {

    const contatos = useSelector (state => state.contatos.contacts)

    return (
        <FlatList
            data={contatos}
            keyExtractor={contato => contato.id}
            renderItem={
                contato => <ContactItem 
                    onSelect={() => props.navigation.navigate ('Detalhes', {nome: contato.item.nome,  telefone: contato.item.telefone})}
                   
                    nome={contato.item.nome}
                />
            }
            
        />
    );
}