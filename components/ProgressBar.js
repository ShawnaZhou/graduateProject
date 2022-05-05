import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Animated,
  useWindowDimensions,
  Easing,
} from "react-native";

const ProgressBar = (props) => {
  const width = useWindowDimensions().width;
  let time = 0;
  let Animate = null;
  const countDown = useRef(new Animated.Value(width)).current;
  useEffect(() => {
    time = props.clock ? props.clock : 0;
    if (time == 0);
    else {
      countDown.setValue(width);
      Animate = Animated.timing(countDown, {
        toValue: 0,
        duration: Number(time) * 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
    return () => {
      Animate?.reset();
    };
  }, [props.clock, countDown]);

  return (
    <View
      style={{
        width: "100%",
        height: 3,
        backgroundColor: "lightblue",
        position: "absolute",
        left: 0,
        top: 0,
      }}
    >
      <Animated.View
        style={{
          width: countDown,
          height: 3,
          position: "absolute",
          left: 0,
          top: 0,
          backgroundColor: "red",
        }}
      ></Animated.View>
    </View>
  );
};

export default ProgressBar;

