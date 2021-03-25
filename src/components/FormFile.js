import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

// Refer: https://stackoverflow.com/questions/39698285/how-to-upload-file-with-redux-form
class FieldFileInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const {
      input: { onChange },
    } = this.props;
    //onChange(e.target.files[0]);
    onChange(e);
  }

  render() {
    const {
      input: { value },
    } = this.props;
    const { input, label, required, meta } = this.props; //whatever props you send to the component from redux-form Field
    return (
      <div>
        <label>{label}</label>
        <div>
          <input
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

class FormFile extends React.Component {
  onChange(e) {
    console.log('onChange:', e.target.files[0]);
  }

  render() {
    return (
      <div>
        <Field
          name="picture"
          component={FieldFileInput}
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
