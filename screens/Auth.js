import React, { useEffect, useState } from "react";
import { View, StyleSheet, ImageBackground, StatusBar } from "react-native";
import { Button, Text, Caption } from "react-native-paper";
import {
  GetFromStore,
  SaveToStore,
  CheckStoreValid,
} from "../components/SecureStore";
import AuthBack from "../assets/authback.jpg";

const Auth = ({ navigation }) => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    let storeValid = CheckStoreValid();
    checkAuth();
  }, []);

  const checkAuth = () => {
    let result = GetFromStore("account");
    if (result) {
      setIsAuth(true);
    }
  };

  const handleRegister = () => {
    navigation.navigate("register");
  };

  const handleLogin = () => {
    navigation.navigate("login");
  };

  return (
    <>
      <ImageBackground
        source={AuthBack}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.container}>
          <View style={styles.topics}>
            <Text
              style={{
                color: "white",
                fontSize: 40,
                fontWeight: "bold",
                letterSpacing: 15,
              }}
            >
              认知障碍预测
            </Text>
            <Text style={{ color: "gray", letterSpacing: 2, marginTop: 10 }}>
              Cognitive Impairment Prediction
            </Text>
          </View>
          <Button
            icon="feather"
            color={"#fff"}
            style={styles.buttons}
            labelStyle={{ fontSize: 16, fontWeight: "bold", letterSpacing: 6 }}
            onPress={() => navigation.navigate("login")}
          >
            登陆
          </Button>
          <Button
            color={"#fff"}
            style={{
              width: "40%",
              marginTop: "8%",
            }}
            labelStyle={{
              fontSize: 16,
              fontWeight: "bold",
              letterSpacing: 6,
            }}
            icon="account-key"
            onPress={() => navigation.navigate("register")}
          >
            注册
          </Button>
        </View>
      </ImageBackground>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    alignItems: "center",
    color: "white",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  topics: {
    marginBottom: "20%",
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    marginVertical: "5%",
    width: "40%",
  },
});

export default Auth;

