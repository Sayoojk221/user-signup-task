import React, { useState } from "react";
import  {
  DateTimePickerAndroid,
  
} from "@react-native-community/datetimepicker";

import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { colors } from "../../theme/colors";
import Text from "../Text";
import { fontSize } from "../../theme/typography";
import scale from "../../utils/scale";
import { useFormikContext } from "formik";
import { dateConvertor } from "../../utils/main";

function DatePicker() {
  const [date, setDate] = useState("DOB");
  const { setFieldValue } = useFormikContext();

  const onChange = (event, selectedDate) => {
    const date = new Date(selectedDate);
    const convertedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    setDate(dateConvertor(selectedDate));
    setFieldValue('dob',convertedDate)
  };

  const openDate = () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange,
      mode: "date",
      is24Hour: true,
    });
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => openDate()} touchSoundDisabled>
        <View style={styles.container}>
          <Text style={styles.dobText}>{date}</Text>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

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
  dobText: {
    fontSize: fontSize.xs,
    color: colors.gray,
    paddingHorizontal: scale(10),
  },
});

export default DatePicker;
