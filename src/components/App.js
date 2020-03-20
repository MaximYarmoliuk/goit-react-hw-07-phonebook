import React, { Component } from "react";
import { connect } from "react-redux";
import withTheme from "../hoc/withTheme";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import contactsSelector from "../redux/contacts/contactsSelectors";
import ThemeSelector from "./ThemeSelector/ThemeSelector";
import contactsOperation from "../redux/contacts/contactsOperations";
import Loader from "react-loader-spinner";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    const { themeConfig, type } = this.props.theme;
    return (
      <div
        style={{
          color: themeConfig[type].fontColor,
          background: themeConfig[type].bodybg
        }}
      >
        {this.props.isLoadingContacts && (
          <Loader type="Puff" color="#00BFFF" height={50} width={50} />
        )}
        <ThemeSelector />

        <ContactForm />

        {this.props.contacts.length >= 2 && <Filter />}

        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelector.getContacts(state),
  isLoadingContacts: state.contacts.loading
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperation.fetchContacts
};

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(App));
