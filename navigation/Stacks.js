import React from "react";
import { Auth, Login, Register } from "../screens/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyDrawer from "./Drawer";
import Test from "../screens/Test";
import ProfileEdit from "../screens/ProfileEdit";

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator initialRouteName="auth">
      <Stack.Screen
        options={{ headerShown: false }}
        name="auth"
        component={Auth}
      />
      <Stack.Screen options={{ title: "" }} name="login" component={Login} />
      <Stack.Screen
        options={{ title: "注册" }}
        name="register"
        component={Register}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="drawer"
        component={MyDrawer}
      />
      <Stack.Screen options={{ title: "测试" }} name="test" component={Test} />
      <Stack.Screen
        options={{ title: "修改个人信息" }}
        name="edit"
        component={ProfileEdit}
      />
    </Stack.Navigator>
  );
};

export default Stacks;

