// import { setFilter } from "./createSlice";
// import { createSelector } from "@reduxjs/toolkit";
const selectContacts = state => state.contacts.contacts.items;
const selectIsLoading = state => state.contacts.contacts.isLoading;
const selectError = state => state.contacts.contacts.error;
const selectFilter = state => state.contacts.filter;

const contactsSelector = {
    selectContacts,
    selectError,
    selectFilter,
    selectIsLoading
};
export default contactsSelector;



