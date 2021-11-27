export const addNewContact = (nome,  telefone) => {
    return {
        type: "ADD_CONTACT",
        payload: {
            
            nome, telefone
        }
    }
}