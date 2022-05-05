import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Chip, Headline } from "react-native-paper";
import PagerView from "react-native-pager-view";
import { Camera, useCameraDevices } from "react-native-vision-camera";

const StageSix = () => {
  const devices = useCameraDevices();
  const device = devices.front;
  const [cameraStatus, setCameraStatus] = useState(false);
  useEffect(() => {
    setCameraStatus(true);
    console.log(device);
  }, [setCameraStatus]);
  if (device == null) {
    console.log("Camera is null");
  }
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
        {!device && (
          <View>
            <Text>Camera</Text>
          </View>
        )}
        {device && (
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={cameraStatus}
          />
        )}
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  absoluteFill: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
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
export default StageSix;

