// src/components/SearchBar.js
import React from 'react';
import { TextInput } from 'react-native';

const SearchBar = ({ value, onChangeText }) => {
  return (
    <TextInput
      placeholder="Search..."
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default SearchBar;
  