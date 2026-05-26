import { useState } from "react";
import { Box } from "../Box";
import { SearchInput } from "../SearchInput";

export function CityFilter() {
  const [name, setName] = useState("");
  return (
    <Box>
      <SearchInput
        value={name}
        onChangeText={setName}
        placeholder="Qual seu próximo destino?"
      />
    </Box>
  );
}
