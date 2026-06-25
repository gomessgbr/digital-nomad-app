import { Category } from "@/types";
import { ScrollView } from "react-native";
import { Box } from "../Box";
import { CategoryPill } from "../CategoryPill";
import { SearchInput } from "../SearchInput";

type CityFilterProps = {
  categories: Category[];
  cityName: string;
  onChangeCityName: (cityName: string) => void;
  selectedCategoryId: string | null;
  onChangeSelectedCategoryId: (id: string | null) => void;
};

export function CityFilter({
  categories,
  cityName,
  onChangeCityName,
  onChangeSelectedCategoryId,
  selectedCategoryId,
}: CityFilterProps) {
  return (
    <Box>
      <Box paddingHorizontal="padding">
        <SearchInput
          value={cityName}
          onChangeText={onChangeCityName}
          placeholder="Qual seu próximo destino?"
        />
      </Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box mt="s16" flexDirection="row" gap="s8" paddingHorizontal="padding">
          {categories.map((category) => (
            <CategoryPill
              key={category.id}
              active={category.id === selectedCategoryId}
              category={category}
              onPress={() => onChangeSelectedCategoryId(category.id)}
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}
