const initialContacts = {
  contacts: [
    { name: "Siva", phoneNumber: "1245854541", email: "siva@gmail.com" },
  ],
  contact: {},
};
export const contactsReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case "GET_ALL_CONTACTS":
      return { ...state };
    case "ADD_CONTACTS": {
      let contacts = [...state.contacts];
      contacts.push(action.payload);
      return { ...state, contacts: contacts };
    }
    case "EDIT_CONTACT": {
        let contacts = [...state.contacts];
        contacts[action.id]=action.payload;
        return { ...state, contacts };
      }
      case "DELETE_CONTACT": {
        let contacts = [...state.contacts];
        contacts.splice(action.id,1);
        return { ...state, contacts };
      }
    case "GET_SINGLE_CONTACT":
      return { ...state, contact:{... state.contacts[action.index],id:action.index }};
    default:
      return state;
  }
};
