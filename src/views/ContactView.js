import { useEffect } from 'react';
import { Container, Title, H2 } from './views.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux'
import { fetchContacts, addContact } from 'redux/contacts/operations';
import { selectFilter, selectContacts, selectError, selectIsLoading } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/createSlice';

const ContactView = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts)
    const filter = useSelector(selectFilter);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const handleAddContact = (data) => {
        dispatch(addContact(data));
    };


    useEffect(() => {
        dispatch(fetchContacts());
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

