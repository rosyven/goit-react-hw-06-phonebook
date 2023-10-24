// import { useSelector, useDispatch } from "react-redux";
// import { addContact} from "redux/contactsSlice";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export const App = () => {
  // const dispatch = useDispatch();
  // const contacts = useSelector((state) => state.contacts.items);
  // const filter = useSelector((state) => state.filter.filter);

    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm
        />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  
}
