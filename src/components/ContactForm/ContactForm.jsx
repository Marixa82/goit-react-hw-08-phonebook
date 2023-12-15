import React, { useState } from 'react';
// import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { Input, Label, FormView, Button, Span } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelector } from 'redux/contacts';


export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector.selectContacts);

  const handleChangeForm = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const id = nanoid();

   const handelCheckUniqueContact = (name) => {
   const isNameContact = !!contacts.find((item) => item.name.toLowerCase() === name.toLowerCase());
    isNameContact && alert(`${name} is already in items`)
    return !isNameContact
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    const isValidatedForm = validateForm();
if (isValidatedForm) {
    dispatch(contactsOperations.addContact({ id, name, number }));
    resetForm();
    }
  else {
    resetForm();
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const validateForm = () => {
    if (!name || !number) {
      alert('Some field is empty');
      return false;
    }
    return handelCheckUniqueContact(name);
  };

  return (
    
      <FormView onSubmit={handelSubmit}>
        <Label htmlFor={id}>
          <Span>Name :</Span>
          <Input
            type="text"
            name="name"
            value={name}
            id={id}
            onChange={handleChangeForm}
            placeholder="Enter contact name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required minLength={2}
          />
         
        </Label>
        <Label htmlFor="">
          <Span>Number :</Span>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChangeForm}
            placeholder="Enter contact number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" required />
         
        </Label>
        <Button type="submit">Add contact</Button>
      </FormView>
    
  );
};




