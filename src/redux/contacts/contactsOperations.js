import contactActions from "./contactsAction";
import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/v1";
const ownerId = "f9f2a270-49b1-45db-b304-75c015e05a15";

const addContact = ({ name, number }) => dispatch => {
  dispatch(contactActions.addContactsRequest());

  axios
    .post(
      "/contacts",
      {
        name,
        number
      },
      {
        headers: {
          Authorization: ownerId,
          "Content-type": "application/json"
        }
      }
    )
    .then(({ data }) => dispatch(contactActions.addContactsSuccess(data)))
    .catch(err => dispatch(contactActions.addContactsError(err)));
};

const fetchContacts = () => dispatch => {
  dispatch(contactActions.fetchContactsRequest());

  axios
    .get("/contacts", {
      headers: {
        Authorization: ownerId
      }
    })
    .then(({ data }) => dispatch(contactActions.fetchContactsSuccess(data)))
    .catch(err => dispatch(contactActions.fetchContactsError(err)));
};

const removeContact = contactId => dispatch => {
  dispatch(contactActions.removeContactsRequest());

  axios
    .delete(
      `/contacts/${contactId}`,
      {
        headers: {
          Authorization: ownerId
        }
      }
    )
    .then(() => dispatch(contactActions.removeContactsSuccess(contactId)))
    .catch(err => dispatch(contactActions.removeContactsError(err)));
};

export default {
  addContact,
  fetchContacts,
  removeContact
};
