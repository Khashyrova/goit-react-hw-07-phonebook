import {
  Phonebook,
  PhonebookTitle,
  PhonebookForm,
  PhonebookFormLabel,
  PhonebookFormInput,
  PhonebookFormButton,
} from './Styles.module.jsx';
import { useGetContactsQuery, useAddContactMutation } from '../api/api';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const { data: contacts = [] } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;

    if (contacts.find(cont => cont.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already your friend...`);
    } else {
      addContact({
        id: nanoid(),
        name,
        phone,
      });
      form.reset();
    }
  };

  return (
    <Phonebook>
      <PhonebookTitle>☎️ Phonebook</PhonebookTitle>
      <PhonebookForm onSubmit={handleSubmit}>
        <PhonebookFormLabel htmlFor="name">Name</PhonebookFormLabel>
        <PhonebookFormInput
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <br />
        <PhonebookFormLabel htmlFor="phone">Number</PhonebookFormLabel>
        <PhonebookFormInput
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <PhonebookFormButton type="submit">Add contact</PhonebookFormButton>
        <br />
      </PhonebookForm>
    </Phonebook>
  );
};

export default ContactForm;
