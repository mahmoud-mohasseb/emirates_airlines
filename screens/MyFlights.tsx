import { View, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Svg, { Line, Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/core";
import Animated, {
  FadeIn,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

export interface Props {
  title: string;
  from: string;
  to: string;
  item: any;
  duration: string;
  date: number;
  FLIGHTNO: string;
  index: number;
}
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fromcityname: "Jakarta",
    tocityname: "New York City",
    from: "NYC",
    to: "CGK",
    FLIGHTNO: "KB765",
    date: "Jan 01, 8.35 PM",
    duration: "1h 35m",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fromcityname: "Jakarta",
    tocityname: "New York City",
    from: "NYC",
    to: "CAP",
    FLIGHTNO: "KB765",
    date: "Jan 01, 8.35 PM",
    duration: "1h 35m",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fromcityname: "Jakarta",
    tocityname: "New York City",
    from: "NYC",
    to: "CGK",
    FLIGHTNO: "KB765",
    date: "Jan 01, 8.35 PM",
    duration: "1h 35m",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    fromcityname: "Jakarta",
    tocityname: "New York City",
    from: "NYC",
    to: "CGK",
    FLIGHTNO: "KB765",
    date: "Jan 01, 8.35 PM",
    duration: "1h 35m",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    fromcityname: "Jakarta",
    tocityname: "New York City",
    from: "NYC",
    to: "CGK",
    FLIGHTNO: "KB765",
    date: "Jan 01, 8.35 PM",
    duration: "1h 35m",
  },
];

const BackImage = styled.Image`
  background: #0b655a;
  width: 510.28px;
  height: 300.8px;
  align-content: center;
`;
const Menu = styled.View`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 20px;
  top: 20px;
`;
const SafeArea = styled.SafeAreaView`
  background: #0b655a;
`;
const Topview = styled.View`
  background: #0b655a;
`;
const Downbellow = styled.View`
  position: absolute;
  width: 100%;
  height: 768px;
  top: 284px;
  background: #f5f6f8;
  border-radius: 40px;
`;
const BellowText = styled.Text`
  position: absolute;
  left: 44px;
  top: 20px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.24px;
  color: #b2c7c5;
`;

const TopText = styled(Animated.Text)`
  position: absolute;
  left: 10%;
  top: 40%;
  font-weight: 500;
  font-size: 40px;
  letter-spacing: -0.24px;
  color: #f8f6e7;
`;
const DesText = styled.Text`
  position: absolute;
  width: 283px;
  height: 16px;
  left: 10%;
  top: 200px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.24px;
  color: #f8f6e7;
`;
const FlightsDetails: any = styled.FlatList`
  position: absolute;
  left: 10%;
`;
const TripsView = styled(Animated.View)`
  background: #ffffff;
  border-radius: 32px;
  width: 327px;
  height: 188px;
  top: 20%;
  margin: 5px;
`;

const DestinationOne = styled.Text`
  position: absolute;
  left: 70%;
  font-weight: 200;
  font-size: 36px;
  color: #0b655a;
`;
const DestinationTwo = styled.Text`
  position: absolute;
  left: 10%;
  font-weight: 200;
  font-size: 36px;
  color: #0b655a;
`;

const DestinationDuration = styled.Text`
  top: 30%;
  width: 34px;
  height: 12px;
  left: 44%;
  letter-spacing: -0.24px;
  font-size: 10px;
  color: black;
`;
const Logoplane = styled.View`
  left: 40%;
  top: 30%;
`;

const Addbutton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  left: 75%;
  top: 65%;
  background: #ff8a63;
  border-radius: 16px;
`;
const Addview = styled(Animated.View)`
  position: absolute;
  position: absolute;
  left: 65%;
  top: 60%;
  box-shadow: 0px 10px 25px rgba(255, 138, 99, 0.9);
`;
const SvgPlus = styled.View`
  left: 15%;
  top: 30%;
`;
const FlightDatetitle = styled.Text`
  position: absolute;
  left: 15%;
  top: 65%;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #b2c7c5;
`;
const FlightDate = styled.Text`
  position: absolute;
  left: 30px;
  top: 80%;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.24px;
  color: #2b4240;
`;
const FlightNumberTitle = styled.Text`
  position: absolute;
  left: 64%;
  top: 65%;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #b2c7c5;
`;
const FlightNumber = styled.Text`
  position: absolute;
  left: 70%;
  top: 80%;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.24px;
  color: #2b4240;
`;

const Item: any = (props: Props) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const isPanning = useSharedValue(false);
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, context: any) => {
      isPanning.value = true;
      context.startX = translateX.value;
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
      translateY.value = context.startY + event.translationY;
    },
    onEnd: (event) => {
      translateX.value = withSpring(0, {
        velocity: event.velocityX,
      });
      translateY.value = withSpring(0, {
        velocity: event.velocityY,
      });
      isPanning.value = false;
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withSpring(isPanning.value ? 1.2 : 1),
      transform: [
        { translateX: withSpring(translateX.value) },
        { translateY: withSpring(translateY.value) },
        { scale: withSpring(isPanning.value ? 1.2 : 1) },
      ],
    };
  });

  //
  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <TripsView style={[animatedStyles]}>
        <Logoplane>
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
        </Logoplane>
        <DestinationOne>{props.from}</DestinationOne>
        <DestinationTwo>{props.to}</DestinationTwo>
        <DestinationDuration>{props.duration}</DestinationDuration>
        <FlightDatetitle>Date</FlightDatetitle>
        <FlightDate>{props.date}</FlightDate>
        <FlightNumberTitle>Flight Number</FlightNumberTitle>
        <FlightNumber>{props.FLIGHTNO}</FlightNumber>
      </TripsView>
    </PanGestureHandler>
  );
};

export default function MyFlights() {
  const navigation = useNavigation();
  const renderItem = ({ item }: Props) => (
    <Item
      from={item.from}
      to={item.to}
      duration={item.duration}
      date={item.date}
      FLIGHTNO={item.FLIGHTNO}
    />
  );

  return (
    <SafeArea>
      <Topview>
        <BackImage source={require("../assets/images/EarthImage.png")} />
        <Menu>
          <Svg width="32" height="19" viewBox="0 0 32 19" fill="none">
            <Line y1="9.5" x2="32" y2="9.5" stroke="#F8F6E7" stroke-width="3" />
            <Line
              x1="16"
              y1="1.5"
              x2="32"
              y2="1.5"
              stroke="#F8F6E7"
              stroke-width="3"
            />
            <Line
              x1="1.31134e-07"
              y1="17.5"
              x2="16"
              y2="17.5"
              stroke="#F8F6E7"
              stroke-width="3"
            />
          </Svg>
        </Menu>
        <TopText>My Flights</TopText>
        <DesText>Fly high anytime, to anywhere for anything</DesText>
      </Topview>
      <Downbellow>
        <BellowText>LASTEST ADD</BellowText>
        {/*  */}
        <FlightsDetails
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
        />
        <Addview entering={FadeIn.delay(500)}>
          <Addbutton onPress={() => navigation.navigate("FlightDetails")}>
            <SvgPlus>
              <Svg width="40" height="20" viewBox="0 0 20 20" fill="none">
                <Path
                  d="M10 0C10.8597 0 11.5702 0.63884 11.6826 1.46769L11.6981 1.69811L11.6965 8.29283L18.3019 8.29399C19.2397 8.29399 20 9.05426 20 9.9921C20 10.8518 19.3612 11.5623 18.5323 11.6747L18.3019 11.6902L11.6965 11.6882L11.6981 18.2861C11.6981 19.2239 10.9378 19.9842 10 19.9842C9.14031 19.9842 8.42983 19.3454 8.31739 18.5165L8.30189 18.2861L8.30109 11.6882L1.69811 11.6902C0.760271 11.6902 0 10.9299 0 9.9921C0 9.13241 0.638839 8.42193 1.46769 8.30949L1.69811 8.29399L8.30109 8.29283L8.30189 1.69811C8.30189 0.760272 9.06216 0 10 0Z"
                  fill="#F8F6E7"
                />
              </Svg>
            </SvgPlus>
          </Addbutton>
        </Addview>
      </Downbellow>
    </SafeArea>
  );
}
