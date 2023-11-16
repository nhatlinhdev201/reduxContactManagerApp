// src/screens/ContactScreen.js
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, updateContact, deleteContact } from '../slices/contactSlice';
import SearchBar from '../components/SearchBar';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';

const ContactScreen = () => {
  const dispatch = useDispatch();
  const { data: contacts, status, error } = useSelector((state) => state.contacts);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchContacts());
    }
  }, [status, dispatch]);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
      contact.phoneNumber.includes(searchText)
  );

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleUpdateContact = (updatedContact) => {
    dispatch(updateContact(updatedContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <View  style={{
        width: '100%',
        flex : 1,
        alignItems : 'center'
    }}>
      <SearchBar value={searchText} onChangeText={(text) => setSearchText(text)} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} onUpdate={handleUpdateContact} />
      <ContactForm onSubmit={handleAddContact} />
    </View>
  );
};

export default ContactScreen;
