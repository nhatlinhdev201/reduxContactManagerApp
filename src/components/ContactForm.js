// src/components/ContactForm.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAddContact = () => {
    onSubmit({ name, phoneNumber });
    setName('');
    setPhoneNumber('');
  };

  return (
    <View style={{
        width: '90%'
    }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        style={{
            width : '90%',
            padding : 5,
            backgroundColor : 'gray'
        }}
      /> 
      <Button title="Add Contact" onPress={handleAddContact} />
    </View>
  );
};

export default ContactForm;
