import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

import contacts from './contacts.json'

import './App.css'

const App = () => {
  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts}/>
    </>
  );
};

export default App
