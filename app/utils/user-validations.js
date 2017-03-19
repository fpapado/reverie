import { validator } from 'ember-cp-validations';

export const email = [
  validator('presence', true),
  validator('format', {
    type: 'email',
    debounce: 300
  })
];

export const password = [
  validator('presence', true),
  validator('length', {
    min: 8,
    max: 24,
    debounce: 300
  })
];

export const passwordConfirmation = [
  validator('presence', true),
  validator('confirmation', {
    on: 'model.password',
    message: '{description} do not match',
    description: 'Passwords',
    debounce: 300
  })
];

export const message = [
  validator('length', {
    max: 150,
    debounce: 300
  })
];

export const category = [
  validator('presence', true)
];

export default {
  email, password, passwordConfirmation, message, category
};
