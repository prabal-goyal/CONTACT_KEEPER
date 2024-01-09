import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Nirmal Saravgi',
        email: 'nirmal@gmail.com',
        phone: '11111-11111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Harshal Bhatia',
        email: 'harshal@gmail.com',
        phone: '22222-22222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Satvik Sharma',
        email: 'satvik@gmail.com',
        phone: '33333-33333',
        type: 'professional',
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // ADD CONTACT

  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // DELETE CONTACT

  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // SET CURRENT CONTACT

  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // CLEAR CURRENT CONTACT

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // UPDATE CONTACT

  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // FILTER CONTACT

  // CLEAR FILTER

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
