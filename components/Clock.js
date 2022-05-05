import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const Clock = (props) => {
  let time = 0;
  let tickMachine = null;
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (props.clock) time = props.clock;
    tickMachine = setInterval(() => {
      if (time <= 0) {
        clearInterval(tickMachine);
      } else {
        time -= 1;
        setResult(time);
      }
    }, 1000);

    return () => {
      clearInterval(tickMachine);
    };
  }, [props.clock]);

  return <View>{result != 0 && <Text>{result} s</Text>}</View>;
};

export default Clock;

