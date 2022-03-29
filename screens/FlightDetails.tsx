import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/core";
import Svg, { Path } from "react-native-svg";
import Plane from "../components/Plane";

const Container = styled.View`
  align-items: center;
  height: 90%;
`;
const Text = styled.Text`
  position: absolute;
  text-align: center;
  top: 5%;
  font-weight: 500;
  font-size: 24px;
`;
const Goback = styled.TouchableOpacity`
  top: 5.5%;
  right: 40%;
`;

export default function FlightDetails() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Container>
        <Goback onPress={() => navigation.navigate("Home")}>
          <Svg width="24" height="20" viewBox="0 0 24 20" fill="none">
            <Path
              d="M24 10.0001C24 10.5606 23.5896 11.0238 23.0571 11.0971L22.9091 11.1072L3.732 11.1067L10.6603 18.1084C11.0873 18.5398 11.0888 19.2408 10.6637 19.6741C10.2772 20.0679 9.67123 20.105 9.24347 19.7844L9.12089 19.6774L0.320892 10.7853L0.299324 10.7619C0.276978 10.738 0.255673 10.7131 0.235481 10.6873L0.320892 10.7853C0.278494 10.7424 0.240294 10.6969 0.206291 10.6493C0.185735 10.6194 0.165788 10.5883 0.147385 10.5562C0.105812 10.4848 0.0735955 10.4101 0.0498314 10.3332C0.041825 10.3062 0.0343841 10.2785 0.0279922 10.2504C0.0227937 10.229 0.0185194 10.2072 0.0148945 10.1853C0.0112702 10.1617 0.00810889 10.1379 0.00569916 10.114C0.00296902 10.09 0.00129228 10.0654 0.000419617 10.0408C0.00023935 10.0272 0 10.0137 0 10.0001L0.000324249 9.96339C0.00122545 9.93612 0.00311512 9.90888 0.00599098 9.88173L0 10.0001C0 9.93693 0.00522209 9.87495 0.0152512 9.81462C0.0197321 9.78714 0.0254078 9.75954 0.0321293 9.73215C0.0375186 9.71037 0.0434441 9.689 0.0499763 9.6679C0.0576862 9.64284 0.0664992 9.61758 0.0762405 9.59261C0.0863561 9.56683 0.0972949 9.54164 0.109112 9.51695C0.118066 9.49806 0.128088 9.47858 0.13872 9.45935C0.158773 9.42328 0.18 9.38944 0.202921 9.35691C0.206527 9.35182 0.210569 9.3462 0.214668 9.34061C0.251052 9.29119 0.288761 9.24761 0.329578 9.20724L9.12083 0.322641C9.54774 -0.10881 10.2385 -0.107358 10.6636 0.325882C11.0501 0.719738 11.0841 1.33486 10.7663 1.7676L10.6604 1.89154L3.73333 8.892L22.9091 8.89305C23.5116 8.89305 24 9.38872 24 10.0001Z"
              fill="#2B4240"
            />
          </Svg>
        </Goback>
        <Text>Flight Details</Text>
        <Plane />
      </Container>
    </SafeAreaView>
  );
}
