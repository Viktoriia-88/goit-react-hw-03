import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

import contacts from './contacts.json';
import { useState } from 'react';
import './App.css';

const App = () => {
  // const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <ContactForm />
      <SearchBox value={filter} onSearch={setFilter} />
      <ContactList contacts={filterContacts} />
    </>
  );
};

export default App
