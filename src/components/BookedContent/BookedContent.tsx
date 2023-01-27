import { FC, useState } from 'react';
import { Formik, Field } from 'formik';
import DatePicker from 'react-datepicker';

import { bookedStyles } from '@/styles/bookedStyles';
import 'react-datepicker/dist/react-datepicker.css';
import './bookedContent.scss';
import { formStyles } from '@/styles/formStyles';
import Footer from '../Footer/Footer';

interface IInitialValues {
  name: string;
  email: string;
}

const BookedContent: FC = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = async (values: IInitialValues, { resetForm }: any) => {
    console.log(values, startDate);
    resetForm();
  };

  const date = new Date();
  return (
    <div className={`${bookedStyles.contentContainer} `}>
      <p className={formStyles.title}>
        Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque.
        Arcu non odio euismod lacinia. Tortor aliquam nulla facilisi cras
        fermentum odio eu.
      </p>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={formStyles.formWrapper}>
              <div className={formStyles.inputWrapper}>
                {/* {touched.email && errors.email && (
                  <span className={formStyles.errorSpan}>{errors.email}</span>
                )} */}
                <label
                  className='text-white text-mutted opacity-90 '
                  htmlFor='name'
                >
                  Name
                  <Field
                    className={`${formStyles.input} formInput`}
                    id='name'
                    type='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    name='name'
                    placeholder='Enter your name'
                  />
                </label>
              </div>
              <div className={formStyles.inputWrapper}>
                {/* {touched.password && errors.password && (
                  <span className={formStyles.errorSpan}>
                    {errors.password}
                  </span>
                )} */}
                <Field
                  className={`${formStyles.input} formInput`}
                  id='email'
                  type='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name='email'
                  placeholder='Your email address'
                />
                <Field
                  className={`${formStyles.input} formInput min-h-[130px] h-full`}
                  id='message'
                  component='textarea'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  name='message'
                  placeholder='Your message'
                />
              </div>
            </div>
            <DatePicker
              className='datePicker'
              dateFormat='dd/MM/yyyy'
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              minDate={new Date()}
              maxDate={new Date(date.setMonth(date.getMonth() + 1))}
              showDisabledMonthNavigation
            />
            <button
              className={`${formStyles.btnSubmit} mt-[15px] mb-[50px]`}
              type='submit'
            >
              Book a table
            </button>
          </form>
        )}
      </Formik>
      <Footer />
    </div>
  );
};

export default BookedContent;
