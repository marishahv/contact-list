import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../contactItem/contactItem';

const ContactList = ({ contacts, onDeleteClick }) => {
  const contactList = contacts.map((contact, index) => {
    const obj = {
      id: contact.id,
      name: contact.name,
      phone: contact.phone,
      onDeleteClick,
    };

    // eslint-disable-next-line react/no-array-index-key
    return <ContactItem contact={obj} key={`${contact.id}${index}`} />;
  });

  return (
    <React.Fragment>
      {(contacts.length === 0) && <p className="mt-4">No results found :(</p>}
      <table className="table mt-4">
        <tbody>
          {contactList}
        </tbody>
      </table>
    </React.Fragment>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactList;
