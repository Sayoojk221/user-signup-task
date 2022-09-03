import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import { colors } from "../../theme/colors";
import { fontSize } from "../../theme/typography";
import scale from "../../utils/scale";


const FormField = ({ ...otherProps }) => {

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        
        style={[styles.textInput]}
        {...otherProps}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    backgroundColor: colors.background.inputField,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
    margin: 15,
    borderColor: colors.border.inputField,
    borderWidth: 1,
  },

  textInput: {
    flex: 1,
    fontSize: fontSize.sm,
    color: 'black',
    fontWeight: "500",
    paddingHorizontal: scale(10),
  },
});

export default FormField;
