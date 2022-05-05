import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import { Button, RadioButton } from "react-native-paper";
import { regAPI } from "../API";
import { SaveToStore } from "../components/SecureStore";
import Toast from "react-native-root-toast";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("1");
  const [provePassword, setProvePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (loading) return;
    try {
      let data = {
        userName: name,
        passWord: password,
        age: Number(age),
        sex: Number(sex),
      };
      setLoading(true);
      await fetch(regAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.code == 200) {
            SaveToStore("userinfo", JSON.stringify(data));
            Toast.show("注册成功.", {
              duration: Toast.durations.SHORT,
            });
            navigation.navigate("drawer", { firstLogin: true });
          } else {
            Toast.show("注册失败.", {
              duration: Toast.durations.SHORT,
            });
          }
        })
        .finally((e) => {
          setLoading(false);
        });
    } catch (err) {
      console.log("error", err);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.items}>
          <Text style={styles.label}>用户名</Text>
          <TextInput
            clearButtonMode={"while-editing"}
            style={styles.textInput}
            value={name}
            placeholder="用户名"
            onChangeText={setName}
          />
        </View>
        <View style={styles.items}>
          <Text style={styles.label}>密码</Text>
          <TextInput
            clearButtonMode={"while-editing"}
            style={styles.textInput}
            secureTextEntry={true}
            value={password}
            placeholder="密码"
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.items}>
          <Text style={styles.label}>确认密码</Text>
          <TextInput
            clearButtonMode={"while-editing"}
            secureTextEntry={true}
            value={provePassword}
            style={styles.textInput}
            placeholder="确认密码"
            onChangeText={setProvePassword}
          />
        </View>
        <View style={styles.items}>
          <Text style={styles.label}>年龄</Text>
          <TextInput
            clearButtonMode={"while-editing"}
            secureTextEntry={false}
            value={age}
            style={styles.textInput}
            placeholder="年龄"
            onChangeText={setAge}
          />
        </View>
        <View style={styles.items}>
          <Text style={styles.label}>性别</Text>
          <RadioButton.Group
            onValueChange={(newValue) => setSex(newValue)}
            value={sex}
          >
            <View style={{ flexDirection: "row", marginLeft: "8%" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>男</Text>
                <RadioButton color={"blue"} value="1" />
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>女</Text>
                <RadioButton
                  style={{ borderWidth: 1, borderColor: "black" }}
                  color={"red"}
                  value="0"
                />
              </View>
            </View>
          </RadioButton.Group>
        </View>
        <Button
          icon="account-check"
          loading={loading}
          disabled={
            !(
              password.length >= 6 &&
              password == provePassword &&
              age.length > 0
            )
          }
          labelStyle={{ color: "white" }}
          style={{ width: "50%", marginTop: "5%" }}
          mode={"contained"}
          onPress={() => handleRegister()}
        >
          注册
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  items: {
    flexDirection: "row",
    height: 40,
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: "3%",
    alignItems: "center",
  },
  label: {
    width: 60,
  },
  textInput: {
    marginLeft: "4%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    flex: 1,
    height: 40,
    paddingHorizontal: "3%",
  },
  content: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Register;

