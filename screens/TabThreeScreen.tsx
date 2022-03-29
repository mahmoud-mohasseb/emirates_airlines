import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Title = styled.TouchableOpacity`
  align-items: center;
  background-color: red;
`;
const EmButton = styled.TouchableOpacity`
  background: #ff8a63;
  border-radius: 20px;
  margin: 80% 20%;
  box-shadow: 0px 10px 25px rgba(255, 138, 99, 0.45);
`;

const EmText = styled.Text`
  margin: 30px 70px;
  font-weight: 600;
  font-size: 16px;
  color: #f8f6e7;
`;
export default function TabThreeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>TabThreeScreen</Text>
      <EmButton onPress={() => navigation.navigate("Home")}>
        <EmText>Press Here</EmText>
      </EmButton>
    </View>
  );
}
