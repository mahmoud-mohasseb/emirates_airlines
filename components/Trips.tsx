import React, { useEffect, useState } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { RootTabScreenProps, TabOne } from "../types";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/core";
import { Dimensions, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import CalendarStrip from "react-native-calendar-strip";
import Svg, { Path } from "react-native-svg";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;

const Wrapper = styled(Animated.View)`
  width: ${windowWidth}px;
  top: 10px;
`;
const PlanePosition = styled.View`
  background: #0b655a;
  border-radius: 40px;
  height: 90%;
`;

const SortBy = styled.View`
  display: flex;
  flex-direction: column;
`;
const SortByTitle = styled.Text`
  top: 50%;
  left: 32px;
  color: white;
`;
const SortPicker = styled.View`
  background: #f8f6e7;
  margin: 20px;
  width: 72px;
  height: 24px;
  border-radius: 10px;
  left: 97px;
  opacity: 0.3;
`;
const Flights = styled.TouchableOpacity`
  top: 2%;
  border-radius: 40px;
  background: white;
  height: 250px;
  width: 400px;
  left: 5px;
  text-align: center;
  margin: 5px;
`;
const Separator = styled.View`
  top: 40%;
  border-bottom-color: black;
  border-bottom-width: 1px;
  opacity: 0.3;
`;

const SubTitle = styled.Text`
  color: #f8f6e7;
  font-size: 14px;
  left: 25px;
`;
const EmaritesLogo = styled.Image`
  left: 43%;
  top: 30px;
`;
const ArrivalDestination = styled.Text`
  position: absolute;
  right: 10px;
  padding: 10px;
  font-size: 28px;
  color: #0b655a;
  top: 20px;
  font-weight: 300;
`;
const FlyDestination = styled.Text`
  position: absolute;
  left: 10px;
  padding: 10px;
  top: 20px;
  font-size: 28px;
  color: #0b655a;
  font-weight: 300;
`;
const Timeduration = styled.Text`
  text-align: center;
  top: 24%;
  font-size: 10px;
  color: #2b4240;
`;
const LogoPlane = styled.View`
  left: 42%;
  top: 20%;
`;

const CardFooter = styled.View`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 90%;
  align-content: center;
`;
const TicketPrice = styled.Text`
  font-size: 10px;
  margin: 0px 5px;
  color: #b2c7c5;
`;
const TicketNumber = styled.Text`
  font-size: 14px;
  margin: 0px 3px;
`;
const Payment1 = styled.Image``;
const Payment2 = styled.Image`
  left: -10px;
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

const Trips = () => {
  const navigation = useNavigation();
  return (
    <Wrapper entering={FadeInDown.delay(500)}>
      {/*  */}
      <CalendarStrip
        scrollable
        style={{
          height: 100,
          paddingTop: 10,
          paddingBottom: 10,
        }}
        highlightDateNameStyle={{
          color: "#0b655a",
          fontSize: 20,
          transform: [{ scaleY: 1 }],
          fontWeight: "bold",
        }}
        calendarHeaderStyle={{ color: "black", fontSize: 15 }}
        dateNumberStyle={{ color: "black", fontSize: 10 }}
        dateNameStyle={{ color: "black", fontSize: 15 }}
        iconContainer={{ flex: 0.1 }}
      />
      <PlanePosition>
        <SortBy>
          <SortByTitle>Sort by :</SortByTitle>
          <SortPicker>
            <Text style={{ color: "red", fontSize: 20, left: 10 }}>Price</Text>
          </SortPicker>
        </SortBy>
        <SubTitle>4 flights available Jakarta to London.</SubTitle>
        <ScrollView>
          <Flights onPress={() => navigation.navigate("FlightDetails")}>
            <EmaritesLogo source={require("../assets/images/g10.png")} />
            <LogoPlane>
              <Svg width="58" height="50" viewBox="0 0 58 30" fill="none">
                <Path
                  d="M35.8676 16.8852L35.8627 16.8632L35.872 16.8823C36.8513 16.4062 38.06 16.4145 39.0378 16.6896C39.524 16.8264 39.9226 17.0209 40.1877 17.225C40.4703 17.4424 40.5162 17.5994 40.5162 17.6515V17.653C40.5162 17.6928 40.5163 17.7665 40.3675 17.9394C40.1982 18.1361 39.873 18.4163 39.2553 18.8413C38.027 19.6863 35.7732 21.0173 31.6742 23.3082C27.9979 25.3265 23.0535 27.7255 21.1749 28.6098L21.1735 28.6105C21.0261 28.6804 20.8648 28.7045 20.7072 28.6815L20.6351 29.1763L20.7072 28.6815C20.5494 28.6586 20.398 28.5888 20.2712 28.4767L20.2699 28.4756L16.9247 25.539L17.3663 25.349C17.5456 25.2824 17.7401 25.2827 17.9193 25.35L17.928 25.3533L17.9369 25.3563L19.8008 25.9779C20.0602 26.0677 20.336 26.0966 20.6082 26.0618C20.8816 26.0269 21.1427 25.929 21.373 25.7766L21.3745 25.7755C22.3073 25.1532 24.4451 23.7724 26.8513 22.2581L27.631 21.7675L26.7947 21.3811L20.5622 18.5015L21.4512 18.236L21.4512 18.236L21.4544 18.235C21.8478 18.1146 22.2605 18.0843 22.6652 18.1458L22.6678 18.1462L31.2045 19.3979L31.3813 19.4239L31.5345 19.3318C33.3225 18.2579 34.8788 17.3499 35.8676 16.8852Z"
                  fill="#0B655A"
                  stroke="#0B655A"
                />
                <Path
                  d="M57 29C57 13.536 44.464 1 29 1C13.536 1 1 13.536 1 29"
                  stroke="#0B655A"
                  stroke-linecap="round"
                  stroke-dasharray="0.5 4"
                />
              </Svg>
            </LogoPlane>
            <Timeduration>1h 35m, 8.35 AM</Timeduration>

            <ArrivalDestination>LCY</ArrivalDestination>
            <Text
              style={{
                position: "absolute",
                right: 20,
                top: 70,
                color: "#2B4240",
                fontSize: 12,
                fontWeight: "500",
              }}
            >
              London
            </Text>
            <View
              style={{
                right: 0,
                position: "absolute",
                top: 110,
                marginRight: 20,
              }}
            >
              <Text style={{ color: "#B2C7C5", fontSize: 12 }}>FLIGHT NO</Text>
              <Text style={{ fontSize: 12, textAlign: "center" }}>KB765</Text>
            </View>
            <FlyDestination>CGK</FlyDestination>
            <Text
              style={{
                position: "absolute",
                left: 20,
                top: 70,
                color: "#2B4240",
                fontSize: 12,
                fontWeight: "500",
              }}
            >
              Jakarta
            </Text>
            <View
              style={{
                left: 0,
                position: "absolute",
                top: 110,
                marginLeft: 20,
              }}
            >
              <Text style={{ color: "#B2C7C5", fontSize: 12 }}>DATE</Text>
              <Text style={{ fontSize: 12, textAlign: "center" }}>DES 19</Text>
            </View>

            <Separator />
            <CardFooter>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  left: 30,
                  bottom: 10,
                }}
              >
                <Payment1 source={require("../assets/images/Paypal.png")} />
                <Payment2 source={require("../assets/images/MasterCard.png")} />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  left: 192,
                  bottom: 10,
                }}
              >
                <TicketPrice>Ticket Price</TicketPrice>
                <TicketNumber>IDR 300,000</TicketNumber>
              </View>
            </CardFooter>
          </Flights>

          <Flights>
            <EmaritesLogo source={require("../assets/images/g10.png")} />
            <LogoPlane>
              <Svg width="58" height="50" viewBox="0 0 58 30" fill="none">
                <Path
                  d="M35.8676 16.8852L35.8627 16.8632L35.872 16.8823C36.8513 16.4062 38.06 16.4145 39.0378 16.6896C39.524 16.8264 39.9226 17.0209 40.1877 17.225C40.4703 17.4424 40.5162 17.5994 40.5162 17.6515V17.653C40.5162 17.6928 40.5163 17.7665 40.3675 17.9394C40.1982 18.1361 39.873 18.4163 39.2553 18.8413C38.027 19.6863 35.7732 21.0173 31.6742 23.3082C27.9979 25.3265 23.0535 27.7255 21.1749 28.6098L21.1735 28.6105C21.0261 28.6804 20.8648 28.7045 20.7072 28.6815L20.6351 29.1763L20.7072 28.6815C20.5494 28.6586 20.398 28.5888 20.2712 28.4767L20.2699 28.4756L16.9247 25.539L17.3663 25.349C17.5456 25.2824 17.7401 25.2827 17.9193 25.35L17.928 25.3533L17.9369 25.3563L19.8008 25.9779C20.0602 26.0677 20.336 26.0966 20.6082 26.0618C20.8816 26.0269 21.1427 25.929 21.373 25.7766L21.3745 25.7755C22.3073 25.1532 24.4451 23.7724 26.8513 22.2581L27.631 21.7675L26.7947 21.3811L20.5622 18.5015L21.4512 18.236L21.4512 18.236L21.4544 18.235C21.8478 18.1146 22.2605 18.0843 22.6652 18.1458L22.6678 18.1462L31.2045 19.3979L31.3813 19.4239L31.5345 19.3318C33.3225 18.2579 34.8788 17.3499 35.8676 16.8852Z"
                  fill="#0B655A"
                  stroke="#0B655A"
                />
                <Path
                  d="M57 29C57 13.536 44.464 1 29 1C13.536 1 1 13.536 1 29"
                  stroke="#0B655A"
                  stroke-linecap="round"
                  stroke-dasharray="0.5 4"
                />
              </Svg>
            </LogoPlane>
            <Timeduration>1h 35m, 8.35 AM</Timeduration>

            <ArrivalDestination>LCY</ArrivalDestination>
            <Text
              style={{
                position: "absolute",
                right: 20,
                top: 70,
                color: "#2B4240",
                fontSize: 12,
                fontWeight: "500",
              }}
            >
              London
            </Text>
            <View
              style={{
                right: 0,
                position: "absolute",
                top: 110,
                marginRight: 20,
              }}
            >
              <Text style={{ color: "#B2C7C5", fontSize: 12 }}>FLIGHT NO</Text>
              <Text style={{ fontSize: 12, textAlign: "center" }}>KB765</Text>
            </View>
            <FlyDestination>CGK</FlyDestination>
            <Text
              style={{
                position: "absolute",
                left: 20,
                top: 70,
                color: "#2B4240",
                fontSize: 12,
                fontWeight: "500",
              }}
            >
              Jakarta
            </Text>
            <View
              style={{
                left: 0,
                position: "absolute",
                top: 110,
                marginLeft: 20,
              }}
            >
              <Text style={{ color: "#B2C7C5", fontSize: 12 }}>DATE</Text>
              <Text style={{ fontSize: 12, textAlign: "center" }}>DES 19</Text>
            </View>

            <Separator />
            <CardFooter>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  left: 30,
                  bottom: 10,
                }}
              >
                <Payment1 source={require("../assets/images/Paypal.png")} />
                <Payment2 source={require("../assets/images/MasterCard.png")} />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  left: 192,
                  bottom: 10,
                }}
              >
                <TicketPrice>Ticket Price</TicketPrice>
                <TicketNumber>IDR 300,000</TicketNumber>
              </View>
            </CardFooter>
          </Flights>
          <Flights>
            <EmaritesLogo source={require("../assets/images/g10.png")} />
            <LogoPlane>
              <Svg width="58" height="50" viewBox="0 0 58 30" fill="none">
                <Path
                  d="M35.8676 16.8852L35.8627 16.8632L35.872 16.8823C36.8513 16.4062 38.06 16.4145 39.0378 16.6896C39.524 16.8264 39.9226 17.0209 40.1877 17.225C40.4703 17.4424 40.5162 17.5994 40.5162 17.6515V17.653C40.5162 17.6928 40.5163 17.7665 40.3675 17.9394C40.1982 18.1361 39.873 18.4163 39.2553 18.8413C38.027 19.6863 35.7732 21.0173 31.6742 23.3082C27.9979 25.3265 23.0535 27.7255 21.1749 28.6098L21.1735 28.6105C21.0261 28.6804 20.8648 28.7045 20.7072 28.6815L20.6351 29.1763L20.7072 28.6815C20.5494 28.6586 20.398 28.5888 20.2712 28.4767L20.2699 28.4756L16.9247 25.539L17.3663 25.349C17.5456 25.2824 17.7401 25.2827 17.9193 25.35L17.928 25.3533L17.9369 25.3563L19.8008 25.9779C20.0602 26.0677 20.336 26.0966 20.6082 26.0618C20.8816 26.0269 21.1427 25.929 21.373 25.7766L21.3745 25.7755C22.3073 25.1532 24.4451 23.7724 26.8513 22.2581L27.631 21.7675L26.7947 21.3811L20.5622 18.5015L21.4512 18.236L21.4512 18.236L21.4544 18.235C21.8478 18.1146 22.2605 18.0843 22.6652 18.1458L22.6678 18.1462L31.2045 19.3979L31.3813 19.4239L31.5345 19.3318C33.3225 18.2579 34.8788 17.3499 35.8676 16.8852Z"
                  fill="#0B655A"
                  stroke="#0B655A"
                />
                <Path
                  d="M57 29C57 13.536 44.464 1 29 1C13.536 1 1 13.536 1 29"
                  stroke="#0B655A"
                  stroke-linecap="round"
                  stroke-dasharray="0.5 4"
                />
              </Svg>
            </LogoPlane>
            <Timeduration>1h 35m, 8.35 AM</Timeduration>

            <ArrivalDestination>LCY</ArrivalDestination>
            <Text
              style={{
                position: "absolute",
                right: 20,
                top: 70,
                color: "#2B4240",
                fontSize: 12,
                fontWeight: "500",
              }}
            >
              London
            </Text>
            <View
              style={{
                right: 0,
                position: "absolute",
                top: 110,
                marginRight: 20,
              }}
            >
              <Text style={{ color: "#B2C7C5", fontSize: 12 }}>FLIGHT NO</Text>
              <Text style={{ fontSize: 12, textAlign: "center" }}>KB765</Text>
            </View>
            <FlyDestination>CGK</FlyDestination>
            <Text
              style={{
                position: "absolute",
                left: 20,
                top: 70,
                color: "#2B4240",
                fontSize: 12,
                fontWeight: "500",
              }}
            >
              Jakarta
            </Text>
            <View
              style={{
                left: 0,
                position: "absolute",
                top: 110,
                marginLeft: 20,
              }}
            >
              <Text style={{ color: "#B2C7C5", fontSize: 12 }}>DATE</Text>
              <Text style={{ fontSize: 12, textAlign: "center" }}>DES 19</Text>
            </View>

            <Separator />
            <CardFooter>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  left: 30,
                  bottom: 10,
                }}
              >
                <Payment1 source={require("../assets/images/Paypal.png")} />
                <Payment2 source={require("../assets/images/MasterCard.png")} />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  left: 192,
                  bottom: 10,
                }}
              >
                <TicketPrice>Ticket Price</TicketPrice>
                <TicketNumber>IDR 300,000</TicketNumber>
              </View>
            </CardFooter>
          </Flights>
        </ScrollView>
      </PlanePosition>
    </Wrapper>
  );
};

export default Trips;
