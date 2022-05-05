import React from "react";
import { View } from "react-native";
import { Title, Caption, Button } from "react-native-paper";
import ProductChart from "./ProductChart";

const ProductDetail = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <ProductChart />
      <View
        style={{
          marginTop: 10,
          width: "100%",
          height: 200,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "48%",
            height: "100%",
            backgroundColor: "white",
            borderRadius: 5,
          }}
        >
          <Title>准确率：93.4%</Title>
          <Caption style={{ width: "80%", textAlign: "center" }}>
            {new Date().toString()}
          </Caption>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "48%",
            height: "100%",
            backgroundColor: "white",
            marginLeft: "4%",
          }}
        >
          <Title>综合得分：93.4%</Title>
          <Caption style={{ width: "80%", textAlign: "center" }}>
            one Month
          </Caption>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

