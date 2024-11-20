/* eslint-disable no-useless-escape */
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const validateEmail = (value: string) => {
  return EMAIL_REGEX.test(value);
};
