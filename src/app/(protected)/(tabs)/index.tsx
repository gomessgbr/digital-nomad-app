import { SafeAreaView } from "react-native-safe-area-context";

import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View>
      <SafeAreaView>
        <View>
          <Text>Welcome to&nbsp;Expo</Text>
        </View>
        <Link href={"/city-details/6"}>Details With link</Link>
        <Link href={"/city-details/6"}>
          <Text>Details With link and Text inside</Text>
        </Link>
        <Text onPress={() => router.navigate("/city-details/8")}>
          Details with text with onPress
        </Text>

        <Link
          href={{
            pathname: "/(protected)/city-details/[id]",
            params: { id: 19 },
          }}
        >
          Details With link with props
        </Link>
        <Text
          onPress={() =>
            router.navigate({
              pathname: "/(protected)/city-details/[id]",
              params: { id: 22 },
            })
          }
        >
          Details with text with onPress with props
        </Text>
      </SafeAreaView>
    </View>
  );
}
