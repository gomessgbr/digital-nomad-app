import { CityCard } from "@/components/CityCard";
import { Icon } from "@/components/Icon";
import { Screen } from "@/components/Screen";
import { cityPreviewList } from "@/data/cities";
import { CityPreview } from "@/types";
import { FlatList, ListRenderItemInfo } from "react-native";

export default function HomeScreen() {
  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />;
  }

  return (
    <Screen>
      <Icon name="Beach" />
      <FlatList data={cityPreviewList} renderItem={renderItem} />
    </Screen>
  );
}
