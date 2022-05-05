import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { Headline, Paragraph, Caption } from "react-native-paper";

const StageThree = () => {
  const data = [
    {
      id: "0",
      title: "今天几号",
      info: "仅填数字",
      content: "",
    },
    {
      id: "1",
      title: "今天星期几",
      info: "仅填数字（1-7）",
      content: "",
    },
    {
      id: "2",
      title: "现在是几月",
      info: "仅填数字（1-12）",
      content: "",
    },
    {
      id: "3",
      title: "现在是几几年",
      info: "仅填数字",
      content: "",
    },
  ];
  const [answer, setAnswer] = useState([]);
  useEffect(() => {}, []);

  const handleValueChange = (text, index) => {
    let tempArray = answer;
    tempArray[index] = text;
    setAnswer(tempArray);
  };
  return (
    <View style={styles.pagerView}>
      <View style={{ padding: 10 }}>
        <Headline>请不看手机日期信息回答以下问题</Headline>

        {data.map((item, index) => {
          return (
            <View key={item.id}>
              <View>
                <Paragraph style={styles.title}>{item.title}</Paragraph>
                <Caption>{item.info}</Caption>
              </View>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => handleValueChange(text, index)}
                value={answer[index]}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    width: "90%",
    marginHorizontal: "5%",
    padding: 0,
    backgroundColor: "#fff",
    height: "80%",
  },
  pager: {
    padding: 10,
  },
  title: {
    marginTop: 10,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    padding: 5,
  },
});
export default StageThree;

