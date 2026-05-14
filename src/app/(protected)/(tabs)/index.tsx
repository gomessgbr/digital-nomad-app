import { CityCard } from "@/components/CityCard";
import { cityPreviewList } from "@/data/cities";
import { CityPreview } from "@/types";
import { FlatList, ListRenderItemInfo, View } from "react-native";

export default function HomeScreen() {
  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />;
  }

  return (
    <View>
      <FlatList data={cityPreviewList} renderItem={renderItem} />
    </View>
  );
}
