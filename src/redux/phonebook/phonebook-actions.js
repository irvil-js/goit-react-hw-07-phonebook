import { createAction } from '@reduxjs/toolkit';

//pending
export const fetchContactRequest = createAction(
  'phonebook/fetchPhonebookRequest',
);
//fulfilled
export const fetchContactSuccess = createAction(
  'phonebook/fetchPhonebookSuccess',
);
//rejected
export const fetchContactError = createAction('phonebook/fetchPhonebookError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contact/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contact/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('phonebook/ChangeFilter');
