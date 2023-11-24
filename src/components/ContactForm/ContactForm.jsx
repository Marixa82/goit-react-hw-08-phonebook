import React, { useState } from 'react';
// import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Input, Label, FormView, Button, Span } from './ContactForm.styled';

export const ContactForm = (props) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

  const handelSubmit = (e) => {
    e.preventDefault();
    const { onAdd } = props;
    const isValidatedForm = validateForm();

    if (isValidatedForm) {
      onAdd({ id, name, number });
      resetForm();
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const validateForm = () => {
    const { onCheckUnique } = props;
    if (!name || !number) {
      alert('Some field is empty');
      return false;
    }
    return onCheckUnique(name);
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
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" required />
         
        </Label>
        <Button type="submit">Add contact</Button>
      </FormView>
    
  );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onCheckUnique: PropTypes.func.isRequired,
};



