import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import BottomSheet, {
// </BottomSheetScrollView>,
// BottomSheetModalProvider,
// } from '@gorhom/bottom-sheet'

import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {

  const queryClient = new QueryClient();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>

            <Stack
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="login" />
              <Stack.Screen name="register" />
            </Stack>
      
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
