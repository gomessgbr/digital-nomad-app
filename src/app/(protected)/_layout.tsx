import { Redirect, Stack } from "expo-router";

const SIGNIN = false;

export default function ProtectedLayout() {
  if (SIGNIN) {
    return <Redirect href="/sign-in" />;
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
