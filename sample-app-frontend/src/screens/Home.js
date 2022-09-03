import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Text from "../components/Text";
import { colors } from "../theme/colors";
import { fontSize } from "../theme/typography";
import scale from "../utils/scale";
import { userInfo } from "../api/services";
import { dateConvertor } from "../utils/main";

function Home({ route }) {
  const [details, setDetails] = useState({});

  useEffect(() => {
    userInfo(route.params?.userId, setDetails);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Details</Text>
      {Object.keys(details).map((item, key) => (
        <View style={styles.contentContainer} key={key}>
          <Text style={styles.content}>
            {item === "dob" ? dateConvertor(details[item]) : details[item]}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(30),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    marginTop: scale(20),
  },
  contentContainer: {
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
  content: {
    flex: 1,
    fontSize: fontSize.sm,
    color: "black",
    // fontWeight: "500",
    paddingHorizontal: scale(10),
  },
  title: {
    fontSize: fontSize.xl,
    fontWeight: "700",
  },
});

export default Home;
