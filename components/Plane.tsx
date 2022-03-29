import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Data from "./SeatsData";
import Animated, {
  FlipInEasyX,
  FadeIn,
  FadeInDown,
} from "react-native-reanimated";
import { RootTabScreenProps, TabOne } from "../types";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/core";
import Svg, { Path } from "react-native-svg";

const EmariatiesAirline = require("../assets/images/Emarites.png");

const Image = styled.Image`
  position: absolute;
  left: 30%;
  top: 15.63%;
  width: 40px;
  height: 30px;
`;
const Wrapper = styled(Animated.View)`
  background: #0b655a;
  border-radius: 40px;
  width: 100%;
  top: 15%;
`;
const DateText = styled(Animated.Text)`
  left: 22%;
  top: 190px;
  font-weight: 400;
  color: #f8f6e7;
`;
const EmText = styled(Animated.Text)`
  left: 23%;
  top: 220px;
  font-weight: 600;
  color: #f8f6e7;
`;
const PlanePosition = styled.View`
  left: 10%;
  top: 37px;
  height: 97.5%;
`;
const PlaneDetails = styled(Animated.View)`
  position: absolute;
  left: 70%;
  top: 25%;
`;
const SelectedSeat = styled.TouchableOpacity`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 400px;
  background: #ff8a63;
  box-shadow: 0px 10px 25px rgba(255, 138, 99, 0.9);
  border-radius: 16px;
`;

const Seat: any = styled.TouchableOpacity`
  position: absolute;
  left: ${(props: Props) => props.left};
  right: ${(props: Props) => props.right};
  top: ${(props: Props) => props.top};
  bottom: ${(props: Props) => props.bottom};
  border: 2px solid
    ${(props: Props) => (props.reserved ? "#F8F6E7" : "#749A93")};
background:${(props: Props) => (props.primary ? "#749A93" : "#FF8A63")}
  border-radius: 4px;
`;

const LogoArrow = styled.TouchableOpacity`
  left: 40%;
  top: 30%;
`;

const CountryDestination = styled.Text`
  position: absolute;
  font-size: 42px;
  color: #f8f6e7;
  left: 65%;
  top: 10%;
`;
const CountryDestinationName = styled.Text`
  position: absolute;
  color: #f8f6e7;
  left: 70%;
  top: 19%;
`;

const ArrivalDate = styled.Text`
  font-size: 14px;
  top: 10%;
  left: 8%;
  color: #f8f6e7;
`;
const CountryArrivals = styled.Text`
  font-size: 42px;
  top: 30%;
  color: #f8f6e7;
`;

const CountryArrivalsName = styled.Text`
  color: #f8f6e7;
  top: 32%;
  left: 10%;
`;

const FlightNumber = styled.Text`
  color: #b2c7c5;
  font-size: 14px;
  left: 5%;
  top: 60%;
`;
const FlightNumberCode = styled.Text`
  color: #b2c7c5;
  font-size: 20px;
  left: 15%;
  top: 61%;
`;

const SeatNumber = styled.Text`
  color: #b2c7c5;
  left: 20%;
  top: 70%;
`;
const SeatNumberCode = styled.Text`
  color: #b2c7c5;
  font-size: 48px;
  left: 5%;
  top: 65%;
`;

export interface Props {
  primary: boolean;
  reserved: boolean;
  left: number;
  right: number;
  top: number;
  bottom: number;
  item: any;
}

const Plane = () => {
  const navigation = useNavigation();
  return (
    <Wrapper entering={FadeInDown.delay(500)}>
      <DateText entering={FlipInEasyX.delay(2000)}>DES 19, 8.35 AM</DateText>
      <EmText entering={FlipInEasyX.delay(2000)}>Economy class</EmText>
      <Image source={EmariatiesAirline} />
      {/*  */}
      {Data.map((item, index, id) => (
        <Seat
          key={index}
          reserved={item.reserved}
          primary={item.primary}
          left={item.left}
          right={item.right}
          top={item.top}
          bottom={item.bottom}
          onPress={() => {
            console.log("hey");
          }}
        />
      ))}

      <PlanePosition>
        <Svg width="203" height="636" viewBox="0 0 203 636" fill="none">
          <Path
            opacity="0.3"
            d="M201.804 260.43L201.802 260.41V260.391C201.802 236.95 192.495 171.902 175.252 112.708C166.631 83.113 156.036 55.0182 143.649 34.3327C131.238 13.6074 117.137 0.5 101.562 0.5C93.7882 0.5 86.3773 3.97943 79.3433 10.2089C72.3068 16.4406 65.6765 25.4001 59.4814 36.2907C47.0916 58.0714 36.4954 87.4801 27.8736 117.951C19.2535 148.416 12.6146 179.916 8.13075 205.862C3.64462 231.822 1.32239 252.185 1.32239 260.391V260.42L1.31885 260.45C0.316544 268.825 0.314606 296.464 0.881577 333.276C1.44817 370.065 2.58141 415.961 3.84062 460.807C5.09982 505.653 6.48495 549.447 7.5553 582.029C8.09045 598.321 8.54692 611.809 8.8696 621.224C9.03093 625.932 9.15881 629.622 9.24637 632.134C9.29015 633.391 9.32384 634.353 9.34659 635.001L9.36415 635.5H193.76L193.776 635.033C193.798 634.407 193.831 633.477 193.873 632.262C193.958 629.831 194.082 626.26 194.238 621.7C194.55 612.578 194.993 599.497 195.512 583.659C196.551 551.982 197.898 509.274 199.133 465.153C201.601 376.887 203.614 283.024 201.804 260.43Z"
            fill="#F8F6E7"
            stroke="black"
          />
        </Svg>
      </PlanePosition>
      {/*  */}
      <CountryDestination>CGK</CountryDestination>
      <CountryDestinationName>Jakarta</CountryDestinationName>
      <PlaneDetails>
        <Svg width="58" height="30" viewBox="0 0 58 30" fill="none">
          <Path
            d="M35.6344 16.7807L35.6295 16.7587L35.6388 16.7779C36.6106 16.3054 37.8103 16.3136 38.7809 16.5866C39.2636 16.7224 39.659 16.9155 39.922 17.1179C40.2023 17.3336 40.2469 17.4886 40.2469 17.5388V17.5405C40.247 17.5792 40.247 17.6518 40.1 17.8226C39.9322 18.0176 39.6095 18.2957 38.9959 18.7178C37.7761 19.5571 35.5376 20.8791 31.4662 23.1545C27.8147 25.1592 22.9037 27.542 21.0377 28.4203L21.0363 28.421C20.8905 28.4902 20.731 28.514 20.5751 28.4913L20.503 28.9861L20.5751 28.4913C20.419 28.4686 20.2693 28.3996 20.1437 28.2886L20.1425 28.2875L16.8238 25.3742L17.2574 25.1876C17.4347 25.1218 17.6271 25.1221 17.8042 25.1887L17.813 25.192L17.8219 25.195L19.6732 25.8124C19.9313 25.9018 20.2058 25.9305 20.4767 25.8959C20.7487 25.8612 21.0086 25.7637 21.2377 25.612L21.2393 25.611C22.1658 24.9929 24.2891 23.6214 26.6791 22.1173L27.4588 21.6266L26.6225 21.2402L20.4401 18.3838L21.3146 18.1226L21.3146 18.1226L21.3178 18.1216C21.708 18.0022 22.1174 17.9721 22.5189 18.0331L22.5215 18.0335L31.0008 19.2768L31.1776 19.3028L31.3308 19.2107C33.1068 18.144 34.6524 17.2422 35.6344 16.7807Z"
            fill="#F8F6E7"
            stroke="#F8F6E7"
          />
          <Path
            d="M56.6232 28.8116C56.6232 13.4517 44.1715 1 28.8116 1C13.4517 1 1 13.4517 1 28.8116"
            stroke="#F8F6E7"
            stroke-linecap="round"
            stroke-dasharray="0.5 4"
          />
        </Svg>
        <ArrivalDate>1h 35m</ArrivalDate>
        <CountryArrivals>LCY</CountryArrivals>
        <CountryArrivalsName>Jakarta</CountryArrivalsName>
        <FlightNumber>FLIGHT NO</FlightNumber>
        <FlightNumberCode>KB767</FlightNumberCode>
        <SeatNumberCode>00</SeatNumberCode>
        <SeatNumber>SEAT</SeatNumber>
        {/* navigate to reserved seat */}
        <SelectedSeat>
          <LogoArrow onPress={() => navigation.navigate("MyFlights")}>
            <Svg width="10" height="20" viewBox="0 0 12 20" fill="none">
              <Path
                d="M0.307374 19.6987C-0.0652006 19.3334 -0.099071 18.7619 0.205763 18.3591L0.307374 18.2437L8.71677 10L0.307374 1.75628C-0.0652006 1.39103 -0.099071 0.819479 0.205763 0.416719L0.307374 0.30133C0.679949 -0.0639186 1.26297 -0.097123 1.6738 0.201717L1.79151 0.30133L10.9426 9.27252C11.3152 9.63777 11.3491 10.2093 11.0442 10.6121L10.9426 10.7275L1.79151 19.6987C1.38168 20.1004 0.717206 20.1004 0.307374 19.6987Z"
                fill="#F8F6E7"
              />
            </Svg>
          </LogoArrow>
        </SelectedSeat>
      </PlaneDetails>
    </Wrapper>
  );
};

export default Plane;
