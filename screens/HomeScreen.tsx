import { SafeAreaView, Dimensions, TextInput, View, Text } from "react-native";
import { RootTabScreenProps, TabOne } from "../types";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/core";
import React, { useState, useRef } from "react";
import * as Yup from "yup";
import { Formik } from "formik";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Container = styled.SafeAreaView`
  align-items: center;
  background: #0b655a;
  width: ${windowWidth}px;
  height: ${windowHeight}px;
  top: 10%;
`;
const EmaritesLogo = styled.Image`
  margin: 80px;
`;
const SubmitButton = styled.TouchableOpacity`
  top: 70.44%;
  bottom: 22.17%;
  background: #ff8a63;
  box-shadow: 0px 10px 25px rgba(255, 138, 99, 0.9);
  border-radius: 20px;
`;

const SubmitText = styled.Text`
  font-weight: 500;
  font-size: 20px;
  margin: 20px;
  height: 30px;
  color: #f8f6e7;
`;

const Subtitle = styled.Text`
  position: absolute;
  width: 251px;
  height: 40px;
  left: 20%;
  top: 230px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.24px;
  color: #f8f6e7;
`;

const SignUp = styled.Text`
  position: absolute;
  left: 35.33%;
  top: 70.8%;
  bottom: 17.73%;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.24px;
  color: #f8f6e7;
`;
export default function HomeScreen() {
  const [value, onChangeText] = useState("Email Address");
  const [Password, onChangePassword] = useState("Password");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "#0B655A" }}>
      <Container>
        <EmaritesLogo source={require("../assets/images/Emarites.png")} />
        <Subtitle>
          Welcome to the Emirates Application, find the various flights you
          need!
        </Subtitle>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values), navigation.navigate("Flights");
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                style={{
                  height: 40,
                  width: 200,
                  margin: 12,
                  borderWidth: 1,
                  borderBottomColor: "#F8F6E7",
                  borderLeftColor: "transparent",
                  borderRightColor: "transparent",
                  borderTopColor: "transparent",
                  padding: 10,
                }}
                placeholderTextColor="#F8F6E7"
                placeholder={value}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <TextInput
                placeholderTextColor="#F8F6E7"
                style={{
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  borderBottomColor: "#F8F6E7",
                  borderLeftColor: "transparent",
                  borderRightColor: "transparent",
                  borderTopColor: "transparent",
                  padding: 10,
                }}
                secureTextEntry
                autoCompleteType="password"
                autoCapitalize="none"
                placeholder={Password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("Password")}
                value={values.password}
              />
              <SubmitButton onPress={() => handleSubmit()}>
                <SubmitText style={{ textAlign: "center", top: 10 }}>
                  Submit
                </SubmitText>
              </SubmitButton>
            </View>
          )}
        </Formik>

        <SignUp>Don’t have an accont ?</SignUp>

        {/* <TouchableOpacity onPress={() => navigation.navigate("Flights")}>
          <Text>Flights</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("FlightDetails")}>
          <Text>FlightDetails</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("TabThreeScreen")}>
          <Text>TabThreeScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("MyFlights")}>
          <Text>MyFlights</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text>Press Here</Text>
        </TouchableOpacity> */}
      </Container>
    </SafeAreaView>
  );
}
