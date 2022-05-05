import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { Headline, Paragraph, Caption } from "react-native-paper";

const StageFour = () => {
  const data = [
    {
      id: "0",
      title:
        "想象您有很多 1 元、5 元和 10 元的钱。现在您购买了一个 13元的东西，需要付给我 13 元，请给我 3 种付款方式。我不会找您零钱，需要您付给我 13元整。",
      info: "仅填数字（尽量填多种数字组合）",
      content: "",
    },
  ];
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answer5, setAnswer5] = useState('');
  const [answer6, setAnswer6] = useState('');
  const [answer7, setAnswer7] = useState('');
  const [answer8, setAnswer8] = useState('');
  const [answer9, setAnswer9] = useState('');

  return (
    <View style={styles.pagerView}>
      <View style={{ padding: 10 }}>
        <Headline>计算</Headline>

        {data.map((item, index) => {
          return (
            <View key={item.id}>
              <View>
                <Paragraph style={styles.title}>{item.title}</Paragraph>
                <Caption>{item.info}</Caption>
              </View>
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ marginRight: 10 }}>1)</Text>
                  <Text>1元*</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setAnswer1(text)}
                    value={answer1}
                  />
                  <Text>5元*</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setAnswer2(text)}
                    value={answer2}
                  />
                  <Text>10元*</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setAnswer3(text)}
                    value={answer3}
                  />
                </View>
              </View>
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ marginRight: 10 }}>2)</Text>
                  <Text>1元*</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setAnswer4(text)}
                    value={answer4}
                  />
                  <Text>5元*</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setAnswer5(text)}
                    value={answer5}
                  />
                  <Text>10元*</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setAnswer6(text)}
                    value={answer6}
                  />
                </View>
              </View>
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ marginRight: 10 }}>3)</Text>
                  <Text>1元*</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setAnswer7(text)}
                    value={answer7}
                  />
                  <Text>5元*</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setAnswer8(text)}
                    value={answer8}
                  />
                  <Text>10元*</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setAnswer9(text)}
                    value={answer9}
                  />
                </View>
              </View>
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
export default StageFour;

