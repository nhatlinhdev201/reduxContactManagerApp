// src/api/contactApi.js
import axios from 'axios';

const BASE_URL = 'https://6554f56263cafc694fe74424.mockapi.io/api/contacts';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getContacts = () => api.get('/');
export const addContactApi = (contact) => api.post('/', contact);
export const updateContactApi = (id, updatedContact) => api.put(`/${id}`, updatedContact);
export const deleteContactApi = (id) => api.delete(`/${id}`);
