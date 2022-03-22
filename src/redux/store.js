import { createStore } from "redux";
import { contactsReducer } from "./reducers/contact";
 export const store= createStore(contactsReducer);
