import { useEffect } from 'react';
import { Container, Title, H2 } from './views.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux'
import { contactsOperations, contactsSelector } from '../redux/contacts';
import { setFilter } from 'redux/contacts/createSlice';

const ContactView = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelector.selectContacts)
    const filter = useSelector(contactsSelector.selectFilter);
    const isLoading = useSelector(contactsSelector.selectIsLoading);
    const error = useSelector(contactsSelector.selectError);

    const handleAddContact = (data) => {
        dispatch(contactsOperations.addContact(data));
    };


    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    const handelCheckUniqueContact = (name) => {
        const isNameContact = !!contacts.find((item) => item.name === name)
        isNameContact && alert(`${name} is already in items`)
        return !isNameContact
    }

    function getVisibleContact() {
        return contacts.filter(item =>
            item.name.toLowerCase().includes((filter && filter.toLowerCase()) || "")
        );
    }

    const handleFilterChange = (e) => {
        dispatch(setFilter(e));
    };
    return (
        <Container>
            <Title>Phonebook</Title>
            <ContactForm onAdd={handleAddContact} onCheckUnique={handelCheckUniqueContact} />
            <H2>Contacts</H2>
            <Filter filter={filter} onChange={handleFilterChange} />
            {isLoading && !error && <b>Request in progress...</b>}
            <ContactList items={getVisibleContact()} />
        </Container>
    )
}
export default ContactView;

