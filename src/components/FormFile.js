import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class FormFile extends React.Component {
  onChange(e) {
    console.log('onChange:', e.target.files[0]);
  }

  render() {
    return (
      <div>
        <Field
          name="picture"
          component="input"
          type="file"
          value={null}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  console.log('In validate:', values);
  return errors;
};

export default connect(
  null,
  null
)(reduxForm({ validate, form: 'formFileForm' })(FormFile));
