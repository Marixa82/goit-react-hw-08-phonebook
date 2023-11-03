import { useEffect } from 'react';
import { Div } from '../components/App/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux'
import { fetchContacts, addContact, deleteContact } from 'redux/contacts/operations';
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
    const handleDelContact = (id) => {
        dispatch(deleteContact(id));
    };

    const handleFilterChange = (e) => {
        dispatch(setFilter(e));
    };
    return (
        <Div>
            <h1>Phonebook</h1>
            <ContactForm onAdd={handleAddContact} onCheckUnique={handelCheckUniqueContact} />
            <h2>Contacts</h2>
            <Filter filter={filter} onChange={handleFilterChange} />
            {isLoading && !error && <b>Request in progress...</b>}
            <ContactList items={getVisibleContact()} delContact={handleDelContact} />
        </Div>
    )
}
export default ContactView;

