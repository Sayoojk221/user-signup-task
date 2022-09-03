import { useFormikContext } from "formik";
import React from "react";

import FormField from "./FormField";
import ErrorMessage from "./ErrorMessage";
import DatePicker from "./DatePicker";

const AppFormField = ({ name, ...otherPropsField }) => {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      {name === "dob" ? (
        <DatePicker />
      ) : (
        <FormField
          {...otherPropsField}
          onBlur={() => setFieldTouched(name)}
          onChangeText={handleChange(name)}
        />
      )}
      <ErrorMessage touched={touched[name]} error={errors[name]} />
    </>
  );
};

export default AppFormField;
