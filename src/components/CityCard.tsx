import { CityPreview } from "@/types";
import { ImageBackground, Text } from "react-native";

type CityCardProps = {
  cityPreview: CityPreview;
};

export function CityCard({ cityPreview }: CityCardProps) {
  return (
    <ImageBackground source={cityPreview.coverImage}>
      <Text>{cityPreview.name}</Text>
      <Text>{cityPreview.country}</Text>
    </ImageBackground>
  );
}
