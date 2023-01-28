import * as yup from 'yup';

export const bookATableValidation = yup.object().shape({
  name: yup.string().label('Name').min(2).max(25).required(),
  email: yup
    .string()
    .label('Email')
    .max(50)
    .email('Example: jimmy@gmail.com')
    .required(),
  message: yup.string().notRequired(),
});
