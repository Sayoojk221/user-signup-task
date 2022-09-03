import { useFormikContext } from "formik";
import React from "react";
import Button from "../Button";

const SubmitForm = ({ title,Icon, style }) => {
  const { handleSubmit } = useFormikContext();
  return <Button title={title} Icon={Icon} onPress={handleSubmit} style={style} />;
};


export default SubmitForm;
