import { Screen } from "@/components/Screen";
import { CityDetailsHeader } from "@/containers/CityDetailsHeader";
import { CityDetailsInfo } from "@/containers/CityDetailsInfo";
import { CityDetailsMap } from "@/containers/CityDetailsMap";
import { CityDetailsRelatedCities } from "@/containers/CityDetailsRelatedCities";
import { CityDetailsTouristAttractions } from "@/containers/CityDetailsTouristAttractions";
import { useLocalSearchParams } from "expo-router";

export default function CityDetails() {
  const { id } = useLocalSearchParams();
  return (
    <Screen>
      <CityDetailsHeader />
      <CityDetailsInfo />
      <CityDetailsTouristAttractions />
      <CityDetailsMap />
      <CityDetailsRelatedCities />
    </Screen>
  );
}
