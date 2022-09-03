import React from "react";
import { StyleSheet, View, Text as BaseText } from "react-native";
import { colors } from "../theme/colors";
import { fontSize } from "../theme/typography";

function Text({ children, style }) {
  return <BaseText style={[styles.container, style]}>{children}</BaseText>;
}

const styles = StyleSheet.create({
  container: {
    fontSize: fontSize.md,
    color: colors.text.primary,
    fontWeight: "400",
  },
});

export default Text;
