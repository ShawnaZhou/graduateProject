import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Chip, Headline } from "react-native-paper";
import PagerView from "react-native-pager-view";

const StageTwo = () => {
  return (
    <PagerView
      scrollEnabled={true}
      onScroll={(index) => setNum(index)}
      style={styles.pagerView}
      initialPage={0}
    >
      <View style={styles.pager} key="0">
        <Headline>记住这些词并在5秒内选出</Headline>
        <View style={{ marginTop: 10 }}>
          <Text>桃花、萝卜、青菜、沙发、蓝色</Text>
        </View>
      </View>
      <View
        key="1"
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: 60,
          justifyContent: "center",
        }}
      >
        <Chip
          style={styles.chip}
          mode="outlined"
          icon="information"
          onPress={() => console.log("Pressed")}
        >
          热门
        </Chip>
        <Chip
          style={styles.chip}
          mode="outlined"
          icon="information"
          onPress={() => console.log("Pressed")}
        >
          红色
        </Chip>
        <Chip
          style={styles.chip}
          mode="outlined"
          icon="information"
          onPress={() => console.log("Pressed")}
        >
          苹果
        </Chip>
        <Chip
          style={styles.chip}
          mode="outlined"
          icon="information"
          onPress={() => console.log("Pressed")}
        >
          桃花
        </Chip>
        <Chip
          style={styles.chip}
          mode="outlined"
          icon="information"
          onPress={() => console.log("Pressed")}
        >
          萝卜
        </Chip>
        <Chip
          style={styles.chip}
          mode="outlined"
          icon="information"
          onPress={() => console.log("Pressed")}
        >
          青菜
        </Chip>
        <Chip
          style={styles.chip}
          mode="outlined"
          icon="information"
          onPress={() => console.log("Pressed")}
        >
          沙发
        </Chip>
        <Chip
          style={styles.chip}
          mode="outlined"
          icon="information"
          onPress={() => console.log("Pressed")}
        >
          蓝色
        </Chip>
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  chip: { 
    marginHorizontal: 3,
    marginVertical: 8,
  },
  pagerView: {
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: "#fff",
    height: "80%",
  },
  pager: {
    padding: 10,
  },
});
export default StageTwo;

