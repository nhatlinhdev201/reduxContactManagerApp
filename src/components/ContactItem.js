// src/components/ContactItem.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ContactItem = ({ contact, onDelete, onUpdate }) => {
  return (
    <View>
      <Text>{contact.name}</Text>
      <Text>{contact.phoneNumber}</Text>
      <TouchableOpacity onPress={() => onUpdate(contact)}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(contact.id)}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactItem;
