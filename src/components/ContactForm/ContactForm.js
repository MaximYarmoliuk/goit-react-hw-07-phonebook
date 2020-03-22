import React, { Component } from "react";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const checkLength = string => string.length < 1;
    const checkOnExist = this.props.contacts.find(
      contact => contact.name === name
    );

    if (checkLength(`${name}`) || checkLength(`${number}`)) {
      alert("Please, fill in all required entry fields");
      return;
    }

    if (checkOnExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.props.addContact({ name, number });

    this.setState({ name: "", number: "" });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>

        <form className={styles.contactForm} onSubmit={this.handleSubmit}>
          <label className={styles.contactLabel}>
            Name
            <input
              className={styles.contactInput}
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.contactLabel}>
            Number
            <input
              className={styles.contactInput}
              type="text"
              value={this.state.number}
              name="number"
              onChange={this.handleChange}
            />
          </label>

          <button className={styles.contactSubmit} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state)
});

const mapDispatchToProps = {
  addContact: contactsOperations.addContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
