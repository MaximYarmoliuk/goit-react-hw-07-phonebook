import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import { connect } from "react-redux";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import propTypes from "prop-types";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul className="Contact">
        {contacts.map(({ id }) => (
          <ContactListItem key={id} id={id} />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired
    })
  )
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state)
});

export default connect(mapStateToProps)(ContactList);
