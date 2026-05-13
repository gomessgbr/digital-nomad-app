import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function CityDetails() {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Esse foi o ID passado === {id}</Text>
    </View>
  );
}
