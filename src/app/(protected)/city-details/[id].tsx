import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useLocalSearchParams } from "expo-router";

export default function CityDetails() {
  const { id } = useLocalSearchParams();
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ThemedText>Esse foi o ID passado === {id}</ThemedText>
    </ThemedView>
  );
}
