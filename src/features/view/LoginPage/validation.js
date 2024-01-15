const validation = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = " Please enter field";
  }
  if (!values.password) {
    errors.password = "Please enter password";
  } else if (
    !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}/.test(values.password)
  ) {
    errors.password =
      "Password must contain at least one digit, one lowercase letter, one uppercase letter, one special character, and be at least 8 characters long";
  }

  if (Object.values(errors).length) {
    return errors;
  } else {
    return false;
  }
};

export default validation;
