import { StatusBar } from "expo-status-bar";
import React from "react";

import theme from "@/theme/theme";
import { ThemeProvider } from "@shopify/restyle";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(protected)" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
