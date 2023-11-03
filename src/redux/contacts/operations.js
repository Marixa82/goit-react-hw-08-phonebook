// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
import { instance } from "redux/auth/auth-operations";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await instance.get("/contacts");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (items, thunkAPI) => {
        try {
            const response = await instance.post("/contacts", items);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await instance.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


