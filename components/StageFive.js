import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Text, ScrollView } from "react-native";
import { Headline, Paragraph, Caption, RadioButton } from "react-native-paper";

const StageFive = () => {
  const data = [
    {
      id: "0",
      title: "请您说说桔子和香蕉属于什么类别？",
      items: ["交通工具", "水果", "乐器", "分向"],
      info: "选择类别",
    },
    {
      id: "1",
      title: "现在您再说说火车和轮船属于什么类别？",
      info: "选择类别",
      items: ["交通工具", "水果", "乐器", "分向"],
    },
    {
      id: "2",
      title: "您再说说锣鼓和笛子属于什么类别？",
      info: "选择类别",
      items: ["交通工具", "水果", "乐器", "分向"],
    },
  ];
  const [answer, setAnswer] = useState([]);
  useEffect(() => {
    console.log(answer);
    setAnswer((prev) => prev);
  }, [answer, handleValueChange]);

  const handleValueChange = (text, index) => {
    console.log("change", text);
    let tempArray = answer;
    tempArray[index] = text;
    setAnswer(tempArray);
    console.log(answer);
  };

  return (
    <View style={styles.pagerView}>
      <ScrollView>
        <View style={{ padding: 10 }}>
          <Headline>抽象</Headline>
          {data.map((item, index) => {
            return (
              <View key={item.id}>
                <View>
                  <Paragraph style={styles.title}>{item.title}</Paragraph>
                  <Caption>{item.info}</Caption>
                </View>
                <RadioButton.Group
                  onValueChange={(newValue) =>
                    handleValueChange(newValue, index)
                  }
                  value={answer[index]}
                >
                  {item.items.map((item2, index2) => {
                    return (
                      <RadioButton.Item
                        style={styles.item}
                        status={
                          index2 == answer[index] ? "checked" : "unchecked"
                        }
                        key={item2}
                        label={item2}
                        value={index2}
                      />
                    );
                  })}
                </RadioButton.Group>
              </View>
            );
          })}
        </View>
      </ScrollView>
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
export default StageFive;

