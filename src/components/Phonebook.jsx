import { useGetContactsQuery } from '..//api/api';
import ContactForm from './ContacttForm';
import ContactList from './ContactList';

import Filter from './Filter';

const Phonebook = () => {
  const { data: contacts = [] } = useGetContactsQuery();

  return (
    <>
      <ContactForm />

      {contacts.length > 0 ? (
        <ContactList>
          <Filter />
        </ContactList>
      ) : (
        <h1>No contacts in your phonebook...</h1>
      )}
    </>
  );
};

export default Phonebook;
