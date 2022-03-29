import { Text, TouchableOpacity, Animated, View } from "react-native";
import { useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Reserve = () => {
  const navigation = useNavigation();

  return (
    <View style={{ margin: 50 }}>
      <TouchableOpacity onPress={() => navigation.navigate("TabThreeScreen")}>
        <Text>Reserve</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Reserve;
