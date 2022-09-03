import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Text from "./Text";
import scale from "../utils/scale";
import { colors } from "../theme/colors";

function Button({ title, style, Icon, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        {Icon && <Icon />}
        {title && <Text>{title}</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: scale(50),
    backgroundColor: colors.background.button,
    justifyContent:'center',
    alignItems:'center'
  },
});

export default Button;
