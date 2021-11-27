
import DetalhesContato from '../telas/DetalhesContato';
import AdicionarContato from '../telas/AdicionarContato';
import ListaContatos from '../telas/ListaContatos';

import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../Constants/Colors';


const Stack = createNativeStackNavigator ();

export default function Navegar (props) {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Lista"
                screenOptions={{
                    headerStyle: {backgroundColor: Colors.primary},
                    headerTintColor: Colors.black //
                }}
            >
                <Stack.Screen
                    name="Lista de Contatos"
                    component={ListaContatos}
                    options={ (props) => ({
                        headerRight: () => (
                            <Button 
                                title="Adicionar"
                                onPress= { () => props.navigation.navigate ('Adicionar')}
                                color={Colors.primary}
                            />
                        )
                    })} 
                />
                <Stack.Screen name="Detalhes" component={DetalhesContato} />
                <Stack.Screen name="Adicionar" component={AdicionarContato} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
