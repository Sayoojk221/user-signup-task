import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { MaterialIcons  } from "@expo/vector-icons";

import { AppFormField, Form, SubmitForm } from "../components/form";
import Text from "../components/Text";
import { colors } from "../theme/colors";
import { fontSize } from "../theme/typography";
import scale from "../utils/scale";
import { userRegister } from "../api/services";

function Register({navigation}) {
  const validationSchema = Yup.object().shape({
    fname: Yup.string().required().label("First Name"),
    email: Yup.string().required().label("Email"),
    dob: Yup.string().required().label("Date Of Birth"),
    username: Yup.string().required().min(8).max(12).label("username"),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Creation</Text>
      <Form
        initialValues={{ fname: "", email: "", dob: "", username: "" }}
        onSubmit={(values,{setFieldError}) => {
         userRegister(values,setFieldError,navigation)
        }}
        validationSchema={validationSchema}
        style={styles.form}
      >
        <AppFormField
          placeholder="First Name"
          name="fname"
          keyboardType="text"
        />

        <AppFormField
          placeholder="Email"
          name="email"
          keyboardType="email-address"
        />
        <AppFormField placeholder="DOB" name="dob" />
        <AppFormField
          placeholder="Username"
          name="username"
          keyboardType="text"
        />

        <Text style={styles.terms}>
          By Signing up, you agree to Our Terms of Use, Subcriber Agreement
        </Text>
        <SubmitForm
          style={styles.submitBtn}
          Icon={() => (
            <MaterialIcons 
              name="arrow-forward-ios"
              size={30}
              color={"white"}
            />
          )}
        />
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(30),
    alignItems: "center",
    backgroundColor: colors.white,
    marginTop:scale(20)
  },
  form: {
    marginVertical: scale(10),
  },
  title: {
    fontWeight: "600",
    fontSize: fontSize.lg,
  },
  terms: {
    textAlign: "center",
    fontSize: fontSize.xs,
    margin: scale(10),
    fontWeight: "300",
  },
  submitBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: scale(50),
    alignSelf: "flex-end",
  },
});

export default Register;
