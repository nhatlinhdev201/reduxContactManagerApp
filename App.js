// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import ContactScreen from './src/screens/contactScreen';
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <ContactScreen/>
    </Provider>
  );
}
