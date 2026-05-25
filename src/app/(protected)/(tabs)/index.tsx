import { CityCard } from "@/components/CityCard";
import { Screen } from "@/components/Screen";
import { cityPreviewList } from "@/data/cities";
import { useAppTheme } from "@/theme/useAppTheme";
import { CityPreview } from "@/types";
import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

export default function HomeScreen() {
  const { spacing } = useAppTheme();
  const flatListRef = useRef(null);
  useScrollToTop(flatListRef);
  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />;
  }

  return (
    <Screen>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={{ gap: spacing.padding }}
        data={cityPreviewList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
