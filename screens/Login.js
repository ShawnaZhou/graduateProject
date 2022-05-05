import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { loginAPI } from "../API";
import { SaveToStore } from "../components/SecureStore";
import Toast from "react-native-root-toast";

const Login = ({ navigation }) => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);

  const handleLogin = async () => {
    let data = {
      userName: text,
      passWord: password,
    };
    await fetch(loginAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.code == 200) {
          SaveToStore("userinfo", JSON.stringify(res.msg));
          Toast.show("登录成功.", {
            duration: Toast.durations.SHORT,
          });
          navigation.navigate("drawer");
        } else {
          Toast.show("登录失败.", {
            duration: Toast.durations.LONG,
          });
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom: "15%" }}>
        登陆
      </Text>
      <TextInput
        label="手机号"
        onChangeText={setText}
        value={text}
        placeholder="输入手机号"
        style={{ width: "90%", marginTop: "5%" }}
        right={<TextInput.Affix text="/11" />}
      />
      <TextInput
        secureTextEntry={passwordValid ? true : false}
        label="密码"
        value={password}
        onChangeText={setPassword}
        type="password"
        placeholder="输入密码"
        style={{ width: "90%", marginTop: "5%" }}
        right={
          <TextInput.Icon
            onPress={() => setPasswordValid(!passwordValid)}
            name={passwordValid ? "eye" : "eye-off"}
          />
        }
      />
      <Button
        mode="contained"
        color="#fff"
        icon="account-multiple-check"
        dark={true}
        style={{
          marginTop: "15%",
          width: "50%",
          color: "white",
          backgroundColor: "green",
        }}
        onPress={() => handleLogin()}
      >
        登陆
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;

