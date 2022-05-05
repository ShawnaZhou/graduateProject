import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from "react-native";
import { Caption, RadioButton, Button } from "react-native-paper";
import { GetFromStore } from "../components/SecureStore";
import { userinfoAPI } from "../API";
import { useIsFocused } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import proImg from "../assets/profileEdit.png";

const ProfileEdit = ({ navigation, route }) => {
  const { initial, userinfo } = route.params;
  console.log("get from prop", userinfo);
  const isFocused = useIsFocused();
  const [userInfo, setUserInfo] = useState({});
  const [checked, setChecked] = useState("0");
  const [marrChecked, setMarrChecked] = useState("0");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodPeer, setBloodPeer] = useState("");
  const [heartRate, setHeartRate] = useState("");
  useEffect(() => {
    GetFromStore("userinfo").then((userInfo) => {
      setUserInfo(JSON.parse(userInfo));
    });
    if (!initial) {
      setChecked(userinfo.eduStatus);
      setMarrChecked(userinfo.marrStatus);
      setWeight(userinfo.weight.toString());
      setHeight(userinfo.height.toString());
      setHeartRate(userinfo.heartRate.toString());
      setBloodPeer(userinfo.bloodPeer.toString());
    }
  }, [isFocused, route]);
  const handleFetch = async () => {
    let data = {
      bloodPeer: Number(bloodPeer),
      eduStatus: checked,
      heartRate: Number(heartRate),
      marrStatus: marrChecked,
      userId: Number(userInfo.userId),
      height: Number(height),
      weight: Number(weight),
    };
    try {
      await fetch(userinfoAPI, {
        method: initial ? "POST" : "PUT",
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
            navigation.goBack();
          } else {
            Toast.show("发送失败.", {
              duration: Toast.durations.LONG,
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.item}>
          <Text>血压</Text>
          <TextInput
            onChangeText={setBloodPeer}
            style={styles.input}
            value={bloodPeer}
            label="血压"
            placeholder="血压"
          />
          <Caption>(mmHg)</Caption>
        </View>
        <View style={styles.item}>
          <Text>身高</Text>
          <TextInput
            value={height}
            onChangeText={setHeight}
            style={styles.input}
            label="身高"
            placeholder="身高"
          />
          <Caption>(cm)</Caption>
        </View>
        <View style={styles.item}>
          <Text>体重</Text>
          <TextInput
            value={weight}
            onChangeText={setWeight}
            style={styles.input}
            label="体重"
            placeholder="体重"
          />
          <Caption>(kg)</Caption>
        </View>
        <View style={styles.item}>
          <Text>心率</Text>
          <TextInput
            value={heartRate}
            onChangeText={setHeartRate}
            style={styles.input}
            label="心率"
            placeholder="心率"
          />
          <Caption>(bpm)</Caption>
        </View>
        <View
          style={{
            ...styles.item,
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Text>受教育程度</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="0"
              uncheckedColor="red"
              status={checked === "0" ? "checked" : "unchecked"}
              onPress={() => setChecked("0")}
            />
            <Text>小学</Text>
            <RadioButton
              value="1"
              uncheckedColor="red"
              status={checked === "1" ? "checked" : "unchecked"}
              onPress={() => setChecked("1")}
            />
            <Text>初中</Text>
            <RadioButton
              value="2"
              uncheckedColor="red"
              status={checked === "2" ? "checked" : "unchecked"}
              onPress={() => setChecked("2")}
            />
            <Text>高中/中专</Text>
            <RadioButton
              value="3"
              uncheckedColor="red"
              status={checked === "3" ? "checked" : "unchecked"}
              onPress={() => setChecked("3")}
            />
            <Text>大学及以上</Text>
          </View>
        </View>
        <View
          style={{
            ...styles.item,
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Text>婚姻状况</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="0"
              uncheckedColor="red"
              status={marrChecked === "0" ? "checked" : "unchecked"}
              onPress={() => setMarrChecked("0")}
            />
            <Text>未婚</Text>
            <RadioButton
              value="1"
              uncheckedColor="red"
              status={marrChecked === "1" ? "checked" : "unchecked"}
              onPress={() => setMarrChecked("1")}
            />
            <Text>已婚</Text>
            <RadioButton
              value="2"
              uncheckedColor="red"
              status={marrChecked === "2" ? "checked" : "unchecked"}
              onPress={() => setMarrChecked("2")}
            />
            <Text>离异</Text>
          </View>
        </View>
      </View>
      <Button
        mode="contained"
        labelStyle={{ color: "white" }}
        onPress={() => handleFetch()}
        style={{ alignSelf: "flex-end", margin: 10 }}
      >
        保存
      </Button>
      <Image
        source={proImg}
        style={{ width: "100%", position: "absolute", bottom: 0 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    margin: 10,
    backgroundColor: "white",
    padding: 10,
    height: "60%",
    justifyContent: "center",
  },
  item: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "7%",
    flexWrap: "wrap",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "black",
    width: "73%",
    marginLeft: "4%",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default ProfileEdit;

