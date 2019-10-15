import React from 'react';
import { withFormik } from 'formik';
import ProfileSchema from './ProfileSchema';

const ProfileForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullnamme">Fullname</label>
        <input
          type="fullname"
          name="fullname"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullname}
        />
        {errors.fullname && touched.fullname && errors.fullname}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && errors.email}
      </div>
      <div className="form-group">
        <label htmlFor="telephone">Telephone</label>
        <input
          type="telephone"
          name="telephone"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.telephone}
        />
        {errors.telephone && touched.telephone && errors.telephone}
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting' : 'Submit'}
      </button>
    </form>
  );
};

export default withFormik({
  mapPropsToValues: () => ({ fullname: '', email: '', telephone: '' }),
  validationSchema: ProfileSchema,
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'ProfileForm'
})(ProfileForm);
