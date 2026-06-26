import { Box } from "@/components/Box";
import { CityCard } from "@/components/CityCard";
import { CityFilter } from "@/components/containers/CityFilter";
import { Screen } from "@/components/Screen";
import { categories } from "@/data/categories";
import { useCities } from "@/data/useCities";
import { useDebounce } from "@/hooks/useDebounce";
import { useAppTheme } from "@/theme/useAppTheme";
import { CityPreview } from "@/types";
import { useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { spacing } = useAppTheme();
  const flatListRef = useRef(null);
  const { top } = useSafeAreaInsets();
  const [cityName, setCityName] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );

  const debouncedCityName = useDebounce(cityName);
  const { cityPreviewList } = useCities({
    name: debouncedCityName,
    categoryId: selectedCategoryId,
  });

  useScrollToTop(flatListRef);
  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return (
      <Box padding="padding">
        <CityCard cityPreview={item} />
      </Box>
    );
  }

  return (
    <Screen style={{ paddingHorizontal: 0 }}>
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
        ListHeaderComponent={
          <CityFilter
            categories={categories}
            cityName={cityName}
            onChangeCityName={setCityName}
            selectedCategoryId={selectedCategoryId}
            onChangeSelectedCategoryId={setSelectedCategoryId}
          />
        }
      />
    </Screen>
  );
}
