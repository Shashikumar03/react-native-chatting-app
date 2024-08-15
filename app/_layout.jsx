import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(public)" />
      {/* <Stack.Screen name="chat" /> */}

    </Stack>
  );
}
