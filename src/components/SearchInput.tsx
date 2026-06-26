import { useAppTheme } from "@/theme/useAppTheme";
import { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { Box, BoxProps } from "./Box";
import { IconButton } from "./IconButton";

type SearchInputProps = {} & Pick<
  TextInputProps,
  "value" | "placeholder" | "onChangeText"
>;

export function SearchInput({
  value,
  placeholder,
  onChangeText,
}: SearchInputProps) {
  const { textVariants, colors } = useAppTheme();
  const [isFocused, setIsFocus] = useState(false);

  function onPressIconButton() {
    if (value!.length > 0) {
      onChangeText?.("");
    }
  }
  return (
    <Box
      {...boxStyle}
      style={{ borderColor: isFocused ? colors.primary : colors.gray1 }}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        style={{
          ...textVariants.title16,
          color: colors.text,
          //   backgroundColor: "green",
          height: "100%",
          width: "100%",
          // Usando o shrink, uma vez que tenha algo que limite o objeto de crescer,
          // ele irá usar apenas os espaço disponível e não irá espremer o outro item
          //https://reactnative.dev/docs/flexbox
          flexShrink: 1,
        }}
      />
      <IconButton
        iconName={value!.length > 0 ? "Close" : "Search-outline"}
        onPress={onPressIconButton}
      />
    </Box>
  );
}

const boxStyle: BoxProps = {
  flexDirection: "row",
  alignItems: "center",
  padding: "s20",
  justifyContent: "space-between",
  backgroundColor: "gray1",
  height: 70,
  borderRadius: "rounded",
  borderWidth: 2,
};
