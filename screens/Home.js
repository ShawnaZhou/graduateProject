import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  IconButton,
  Divider,
  Modal,
  Portal,
  Text,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ProductDetail from "../components/ProductDetail";
import Products from "../components/Products";
import { GetFromStore, DeleteFromStore } from "../components/SecureStore";
import { getuserinfoAPI } from "../API";
import editImg from "../assets/editProfile.png";

const Home = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const [isShow, setIsShow] = useState(true);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    GetFromStore("userinfo").then((userInfo) => {
      setUserInfo(JSON.parse(userInfo));
    });
  }, []);
  useEffect(() => {
    if (userInfo) checkUserInfoStatus(userInfo.userId);
  }, [userInfo]);

  const checkUserInfoStatus = async (userId) => {
    await fetch(getuserinfoAPI + userId)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.code == 200 && !res.msg) {
          setVisible(true);
        }
      })
      .catch((err) => {});
  };

  const bgImg = {
    uri: "https://images.pexels.com/photos/11780519/pexels-photo-11780519.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  };
  const data = [
    {
      id: 0,
      title: "title1",
      date: new Date(),
      content: "content1",
    },
    {
      id: 1,
      title: "title2",
      date: new Date(),
      content: "content1",
    },
    {
      id: 2,
      title: "title3",
      date: new Date(),
      content: "content3",
    },
    {
      id: 3,
      title: "title4",
      date: new Date(),
      content: "content4",
    },
    {
      id: 4,
      title: "title5",
      date: new Date(),
      content: "content5",
    },
  ];

  const logOut = () => {
    DeleteFromStore("userinfo");
    navigation.navigate("auth");
  };
  const handleExtraContent = () => {
    console.log("q");
  };
  const handleProfile = () => {
    setVisible(false);
    navigation.navigate("edit", { initial: true });
  };
  const navigateToTest = () => {
    navigation.navigate("test");
  };
  const renderExtraContent = () => {
    return (
      <TouchableOpacity
        style={{
          width: 100,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
        onPress={() => handleExtraContent()}
      >
        <Button icon={"arrow-right-bold"}>More</Button>
      </TouchableOpacity>
    );
  };
  const renderItem = ({ item }) => <Products data={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Portal>
        <Modal
          visible={visible}
          dismissable={true}
          contentContainerStyle={{
            backgroundColor: "white",
            paddingTop: 20,
            paddingHorizontal: 20,
            paddingBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image style={{ width: 100, height: 100 }} source={editImg} />
            <View style={{ alignItems: "flex-end" }}>
              <Title>首次登陆？</Title>
              <Text>填写个人信息有助于提高预测准确率哦！</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              alignSelf: "flex-end",
            }}
          >
            <Button onPress={() => setVisible(false)}>下次</Button>
            <Button onPress={() => handleProfile()}>好的</Button>
          </View>
        </Modal>
      </Portal>
      <ScrollView style={styles.scroll}>
        <Card>
          <Card.Title
            title={userInfo.userName}
            subtitle={userInfo.sex == 0 ? "女" : "男"}
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => (
              <IconButton {...props} icon="logout" onPress={() => logOut()} />
            )}
          />
          {isShow && (
            <>
              <Card.Content>
                <Divider />
                <Paragraph>美好的心情有利于身体健康</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            </>
          )}
          <Card.Actions>
            <Button onPress={() => setIsShow(!isShow)}>
              {isShow ? "Ok" : "More"}
            </Button>
          </Card.Actions>
        </Card>
        <Card style={{ marginTop: 10, paddingHorizontal: 10 }}>
          <TouchableOpacity onPress={() => navigateToTest()}>
            <ImageBackground
              source={bgImg}
              resizeMode="cover"
              style={{ width: "100%", borderRadius: 10, overflow: "hidden" }}
            >
              <Card.Content
                style={{
                  height: 100,
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,0.2)",
                }}
              >
                <Button
                  icon="comment-check-outline"
                  labelStyle={{ fontWeight: "bold", fontSize: 16 }}
                  color="#fff"
                >
                  现在测试
                </Button>
              </Card.Content>
            </ImageBackground>
          </TouchableOpacity>
        </Card>
        <View style={styles.listHead}>
          <Title style={{ marginLeft: 10, marginTop: 5 }}>测试历史</Title>
        </View>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={renderItem}
          ListFooterComponent={renderExtraContent}
          keyExtractor={(item) => item.id}
        />
        <ProductDetail />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: {
    flex: 1,
    width: "100%",
  },
  listHead: {
    backgroundColor: "#fff",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#a5f5e6",
    height: 60,
    justifyContent: "center",
  },
  items: {
    backgroundColor: "white",
    height: 80,
    marginVertical: 5,
  },
});
export default Home;

