import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { routes } from "./routes";
import Register from "../screens/Register";
import Home from "../screens/Home";
import { authStyle } from "../theme/styles";

const Stack = createStackNavigator();

export const AuthNavigation = () => (
  <Stack.Navigator screenOptions={authStyle}>
    <Stack.Screen name={routes.register} component={Register} />
    <Stack.Screen name={routes.home} component={Home} />
  </Stack.Navigator>
);
