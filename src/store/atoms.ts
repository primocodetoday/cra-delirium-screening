import { atom } from 'recoil';

export const signIn = atom({
  key: 'signIn',
  default: { id: '', pass: '' },
});

export const loggedUser = atom({
  key: 'userLogged',
  default: '',
});
