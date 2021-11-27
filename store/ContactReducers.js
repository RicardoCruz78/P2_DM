import Contact from '../Contact';

const initialState = {
    contacts: []
};

export default (state = initialState, action) => {
    if (action.type === "ADD_CONTACT") {
        const contact = new Contact (new Date().toString(), action.payload.nome, action.payload.telefone);
        return {
            contacts: state.contacts.concat (contact)
        }
    }
    

    return state;
}