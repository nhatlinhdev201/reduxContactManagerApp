// src/components/ContactList.js
import React from 'react';
import { FlatList } from 'react-native';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDelete, onUpdate }) => {
  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ContactItem contact={item} onDelete={onDelete} onUpdate={onUpdate} />
      )}
    />
  );
};

export default ContactList;
