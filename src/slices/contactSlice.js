// src/slices/contactSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContactApi, updateContactApi, deleteContactApi } from '../api/contactApi';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await getContacts();
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const response = await addContactApi(contact);
  return response.data;
});

export const updateContact = createAsyncThunk('contacts/updateContact', async ({ id, updatedContact }) => {
  const response = await updateContactApi(id, updatedContact);
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
  await deleteContactApi(id);
  return id;
});

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.data.findIndex((contact) => contact.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.data = state.data.filter((contact) => contact.id !== action.payload);
      });
  },
});

export default contactSlice.reducer;
