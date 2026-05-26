import { CityCard } from "@/components/CityCard";
import { CityFilter } from "@/components/containers/CityFilter";
import { Screen } from "@/components/Screen";
import { cityPreviewList } from "@/data/cities";
import { useAppTheme } from "@/theme/useAppTheme";
import { CityPreview } from "@/types";
import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { spacing } = useAppTheme();
  const flatListRef = useRef(null);
  const { top } = useSafeAreaInsets();
  useScrollToTop(flatListRef);
  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />;
  }

  return (
    <Screen>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={{
          gap: spacing.padding,
          paddingTop: top,
          paddingBottom: spacing.padding,
        }}
        data={cityPreviewList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<CityFilter />}
      />
    </Screen>
  );
}
