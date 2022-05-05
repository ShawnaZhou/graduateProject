import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, Image } from "react-native";
import {
  Caption,
  Card,
  Title,
  Text,
  Banner,
  FAB,
  Button,
} from "react-native-paper";
import { SaveToStore } from "../components/SecureStore";
import { getuserinfoAPI } from "../API";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { GetFromStore } from "../components/SecureStore";
import proImg from "../assets/profile.png";
import proImg2 from "../assets/handleProfile.png";

const Profile = () => {
  const isFoucesed = useIsFocused();
  const navigation = useNavigation();
  const [visible, setVisible] = useState(true);
  const [constant, setConstant] = useState({});
  const [userinfo, setUserInfo] = useState();
  useEffect(() => {
    if (isFoucesed) {
      GetFromStore("userinfo").then((userInfo) => {
        setConstant(JSON.parse(userInfo));
        checkUserInfoStatus(JSON.parse(userInfo).userId);
      });
    }
  }, [isFoucesed]);
  const checkUserInfoStatus = async (e) => {
    await fetch(getuserinfoAPI + e)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.msg) {
          setUserInfo(res.msg);
          SaveToStore("userConstant", JSON.stringify(res.msg));
        }
      });
  };
  const handleEdit = (initial) => {
    navigation.navigate("edit", {
      initial: initial,
      userinfo: { ...userinfo },
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        {userinfo && (
          <>
            <Banner
              visible={visible}
              actions={[
                {
                  label: "Got it",
                  onPress: () => setVisible(false),
                },
              ]}
            >
              请注意及时维护自己的信息，有利于提高准确度。
            </Banner>
            <Card
              style={{ width: "100%", height: "15%", justifyContent: "center" }}
            >
              <View
                style={{
                  padding: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Title>{constant.userName}</Title>
                <Caption>{constant.sex == 0 ? "女" : "男"}</Caption>
              </View>
              <Text style={{ paddingLeft: 10 }}>年龄:{constant.age}</Text>
            </Card>
            <View style={styles.content}>
              <Card style={styles.item}>
                <Title style={{ textAlign: "center" }}>血压</Title>
                <Caption style={{ textAlign: "center" }}>
                  {userinfo.bloodPeer ? userinfo.bloodPeer + "mmHg" : "未填写"}
                </Caption>
              </Card>
              <Card style={styles.item}>
                <Title style={{ textAlign: "center" }}>教育程度</Title>
                <Caption style={{ textAlign: "center" }}>
                  {userinfo.eduStatus == 0
                    ? "小学"
                    : userinfo.eduStatus == 1
                    ? "初中"
                    : userinfo.eduStatus == 2
                    ? "高中或中专"
                    : userinfo.eduStatus == 3
                    ? "大学及以上"
                    : "未填写"}
                </Caption>
              </Card>
              <Card style={styles.item}>
                <Title style={{ textAlign: "center" }}>心率</Title>
                <Caption style={{ textAlign: "center" }}>
                  {userinfo.heartRate ? userinfo.heartRate + "bpm" : "未填写"}
                </Caption>
              </Card>
              <Card style={styles.item}>
                <Title style={{ textAlign: "center" }}>身高</Title>
                <Caption style={{ textAlign: "center" }}>
                  {userinfo.height ? userinfo.height + "cm" : "未填写"}
                </Caption>
              </Card>
              <Card style={styles.item}>
                <Title style={{ textAlign: "center" }}>体重</Title>
                <Caption style={{ textAlign: "center" }}>
                  {userinfo.weight ? userinfo.weight + "kg" : "未填写"}
                </Caption>
              </Card>
              <Card style={styles.item}>
                <Title style={{ textAlign: "center" }}>婚姻状况</Title>
                <Caption style={{ textAlign: "center" }}>
                  {userinfo.marrStatus == 0
                    ? "未婚"
                    : userinfo.marrStatus == 1
                    ? "已婚"
                    : userinfo.marrStatus == 2
                    ? "离异"
                    : "未填写"}
                </Caption>
              </Card>
            </View>
            <FAB
              style={styles.fab}
              small
              icon="account-edit"
              onPress={() => handleEdit(false)}
            />
            <Image
              source={proImg}
              style={{
                width: "100%",
                position: "absolute",
                bottom: 0,
                zIndex: 0,
              }}
            />
          </>
        )}
        {!userinfo && (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Caption>还没有填写信息</Caption>
            <Button onPress={() => handleEdit(true)}>去填写</Button>
            <Image
              source={proImg2}
              style={{ width: "100%", position: "absolute", left: 0, top: 0 }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  content: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  item: {
    width: "48%",
    margin: "1%",
    alignItems: "center",
    paddingVertical: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 100,
    zIndex: 10,
  },
});

export default Profile;

