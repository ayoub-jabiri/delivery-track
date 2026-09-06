import "../../global.css";
import Ionicons from "@expo/vector-icons/Ionicons";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";

const queryClient = new QueryClient();

export default function RootLayout() {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Delivery Trucker",
            headerLeft: () => null,
            headerRight: () => (
              <Pressable
                onPress={() => router.navigate("/add-delivery")}
                style={{ paddingLeft: 10 }}
              >
                <Ionicons name="add" size={28} color="black" />
              </Pressable>
            ),
          }}
        />
        <Stack.Screen
          name="[id]/delivery-details"
          options={{
            headerTitle: "Delivery Trucker",
            headerLeft: () => (
              <Pressable onPress={() => router.back()} style={{ paddingRight: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </Pressable>
            ),
          }}
        />
        <Stack.Screen
          name="add-delivery"
          options={{
            headerTitle: "Delivery Trucker",
            headerLeft: () => (
              <Pressable onPress={() => router.back()} style={{ paddingRight: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </Pressable>
            ),
          }}
        />
        <Stack.Screen
          name="[id]/edit-delivery"
          options={{
            headerTitle: "Delivery Trucker",
            headerLeft: () => (
              <Pressable onPress={() => router.back()} style={{ paddingRight: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </Pressable>
            ),
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
