import { FC, useEffect, useState } from 'react';
import { Formik, Field } from 'formik';
import DatePicker from 'react-datepicker';
import { formStyles } from '@/styles/formStyles';
import Footer from '../Footer/Footer';
import { useUserBookATableMutation } from '@/store/api/bookATableApi';

import { bookedStyles } from '@/styles/bookedStyles';
import './bookedContent.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { bookATableValidation } from '@/utils/vaildationSchema/bookATableValidation';
import BookTableModal from '../BookeTableModal/BookTableModal';

interface IInitialValues {
  name: string;
  email: string;
}

const BookedContent: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [userBookATable, { isLoading, isError, data, isSuccess }] =
    useUserBookATableMutation();

  const handleSubmit = async (values: IInitialValues, { resetForm }: any) => {
    resetForm();
    const data = {
      ...values,
      date: `${startDate}`.slice(0, 16),
    };
    try {
      await userBookATable(data);
    } catch (err) {
      console.error(err);
    }
  };

  const date = new Date();
  return (
    <div className={`${bookedStyles.contentContainer} `}>
      {isError ? (
        <BookTableModal
          response={isError}
          text='Server error. Try again later'
        />
      ) : null}
      {isSuccess ? (
        <BookTableModal response={isSuccess} text={data.msg} />
      ) : null}
      <p className={formStyles.title}>
        Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque.
        Arcu non odio euismod lacinia. Tortor aliquam nulla facilisi cras
        fermentum odio eu.
      </p>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        onSubmit={handleSubmit}
        validationSchema={bookATableValidation}
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
                <label className=' text-mutted opacity-90 ' htmlFor='name'>
                  Name
                  {touched.name && errors.name && (
                    <span className={formStyles.errorSpan}>{errors.name}</span>
                  )}
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
                <label htmlFor='email' className=' text-mutted opacity-90 '>
                  Email
                  {touched.email && errors.email && (
                    <span className={formStyles.errorSpan}>{errors.email}</span>
                  )}
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
                </label>
                <label htmlFor='email' className=' text-mutted opacity-90 '>
                  Message
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
                </label>
              </div>
            </div>
            <div>
              <p className='text-mutted opacity-90 mb-[5px]'>Select date</p>
              <DatePicker
                className='datePicker'
                dateFormat='dd/MM/yyyy'
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                minDate={new Date()}
                maxDate={new Date(date.setMonth(date.getMonth() + 1))}
                showDisabledMonthNavigation
              />
            </div>
            <button
              className={`${formStyles.btnSubmit} mt-[15px] mb-[50px]`}
              type='submit'
            >
              {isLoading ? 'Loading...' : 'Book a table'}
            </button>
          </form>
        )}
      </Formik>
      <Footer />
    </div>
  );
};

export default BookedContent;
