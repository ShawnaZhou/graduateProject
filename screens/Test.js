import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import Clock from "../components/Clock";
import PagerView from "react-native-pager-view";
import { Button, Headline, Paragraph, RadioButton } from "react-native-paper";
import StageTwo from "../components/StageTwo";
import StageThree from "../components/StageThree";
import ProgressBar from "../components/ProgressBar";
import StageFour from "../components/StageFour";
import StageFive from "../components/StageFive";
import StageSix from "../components/StageSix";

const Test = () => {
  const [result, setResult] = useState([]);
  const [time, setTime] = useState(0);
  const [stage, setStage] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("stageChange: ", stage);
    switch (stage) {
      case 0:
        setTime(60);
        break;
      case 1:
        setTime(5);
        break;
      case 3:
        setTime(60);
        break;
      case 4:
        setTime(60);
        break;
      default:
        setTime(60);
        break;
    }
  }, [stage]);

  const updateResult = (res) => {
    let tempResult = result;
    tempResult[num] = res;
    setResult(tempResult);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar clock={time} />
      <View style={styles.header}>
        <Text>第{stage + 1}阶段</Text>
        <Clock clock={time} />
      </View>
      {stage == 0 && (
        <PagerView
          scrollEnabled={true}
          onScroll={(index) => setNum(index)}
          style={styles.pagerView}
          initialPage={0}
        >
          <View style={styles.pager} key="0">
            <Headline>First page</Headline>
            <Paragraph>lorem ipsum dolor sit amet, consectetur</Paragraph>
            <View>
              <RadioButton.Group
                onValueChange={(newValue) => updateResult(newValue)}
                value={result[num]}
              >
                <RadioButton.Item
                  style={styles.item}
                  label="First item"
                  value="first"
                />
                <RadioButton.Item
                  style={styles.item}
                  label="Second item"
                  value="second"
                />
              </RadioButton.Group>
            </View>
          </View>
          <View style={styles.pager} key="1">
            <Headline>Second page</Headline>
            <Paragraph>lorem ipsum dolor sit amet, consectetur</Paragraph>
            <RadioButton.Group
              onValueChange={(newValue) => updateResult(newValue)}
              value={result[num]}
            >
              <RadioButton.Item
                style={styles.item}
                label="First item"
                value="first"
              />
              <RadioButton.Item
                style={styles.item}
                label="Second item"
                value="second"
              />
            </RadioButton.Group>
          </View>
          <View style={styles.pager} key="2">
            <Headline>Third page</Headline>
            <Paragraph>lorem ipsum dolor sit amet, consectetur</Paragraph>
            <RadioButton.Group
              onValueChange={(newValue) => updateResult(newValue)}
              value={result[num]}
            >
              <RadioButton.Item
                style={styles.item}
                label="First item"
                value="first"
              />
              <RadioButton.Item
                style={styles.item}
                label="Second item"
                value="second"
              />
            </RadioButton.Group>
          </View>
        </PagerView>
      )}
      {stage == 1 && <StageTwo />}
      {stage == 2 && <StageThree />}
      {stage == 3 && <StageFour />}
      {stage == 4 && <StageFive />}
      {stage == 5 && <StageSix />}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          marginTop: 10,
        }}
      >
        <Button
          mode="contained"
          disabled={stage == 0}
          color="#fff"
          onPress={() => setStage(stage - 1)}
        >
          Prev Stage
        </Button>
        <Button
          mode="contained"
          color="#fff"
          disabled={stage == 5}
          onPress={() => setStage(stage + 1)}
        >
          Next Stage
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  pagerView: {
    width: "90%",
    marginHorizontal: "5%",
    padding: 50,
    backgroundColor: "#fff",
    height: "80%",
  },
  pager: {
    padding: 10,
  },
  item: {
    backgroundColor: "#f5f5f5",
    marginTop: 10,
  },
});
export default Test;

