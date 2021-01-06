import _isEmpty from 'lodash/isEmpty';
import { gfErrors } from 'goldfish/gfErrors';

export const validateEmail = (value: string): boolean => {
  if (!value) return false;

  // eslint-disable-next-line no-useless-escape
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
};

// { name: { value: 'value', require: true/false/undefined } }
export const checkRequireFields = (data) => {
  const errors = {};
  
  Object.entries(data).forEach(([key, value]) => {
    if (key === 'email') {
      const correctEmail = validateEmail(value as string);
      if (!correctEmail) {
        errors[key] = gfErrors.emailError(value).en;
      }
    } else if (!value) {
      errors[key] = gfErrors.emptyField.en;
    }
  });

  return {
    isValid: _isEmpty(errors),
    errors,
  };
};
