import { Category } from "@/types";
import { useState } from "react";
import { ScrollView } from "react-native";
import { Box } from "../Box";
import { CategoryPill } from "../CategoryPill";
import { SearchInput } from "../SearchInput";

type CityFilterProps = {
  categories: Category[];
};

export function CityFilter({ categories }: CityFilterProps) {
  const [name, setName] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );
  return (
    <Box>
      <Box paddingHorizontal="padding">
        <SearchInput
          value={name}
          onChangeText={setName}
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
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}
