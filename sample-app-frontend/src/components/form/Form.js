import { Formik } from "formik";
import React from "react";
import { View } from "react-native";

const Form = ({ style,initialValues, onSubmit, validationSchema, children }) => {
  return (
    <View style={[{width:'100%'},style]}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => children}
      </Formik>
    </View>
  );
};

export default Form;
