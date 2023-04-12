import {
  Contacts,
  ContactsTittle,
  ContactsList,
  ContactsItem,
  ContactsText,
  ContactsSpan,
  ContactsButton,
} from './Styles.module';
import { useSelector } from 'react-redux';
import { useGetContactsQuery, useDeleteContactMutation } from '../api/api';

const ContactList = ({ children }) => {
  const filtersContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const filter = useSelector(state => state.filter);

  const { data: contacts = [] } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const contactsList = filtersContacts(contacts, filter);
  return (
    <Contacts>
      <ContactsTittle>Contacts</ContactsTittle>
      {children}
      <ContactsList>
        {contactsList.length === 0 ? null : (
          <>
            {contactsList.map(({ name, phone, id }) => {
              return (
                <ContactsItem key={id}>
                  <ContactsText>
                    <ContactsSpan>{name} : </ContactsSpan>
                    {phone}
                  </ContactsText>
                  <ContactsButton onClick={() => deleteContact({ id })}>
                    ⛌
                  </ContactsButton>
                </ContactsItem>
              );
            })}
          </>
        )}
      </ContactsList>
    </Contacts>
  );
};

export default ContactList;
