import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";

export default function RootLayout() {
    const router = useRouter();

    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: "Delivery Trucker",
                    headerLeft: () => null,
                }}
            />
            <Stack.Screen
                name="[id]/delivery-details"
                options={{
                    headerTitle: "Delivery Trucker",
                    headerLeft: () => (
                        <Pressable
                            onPress={() => router.back()}
                            style={{ paddingRight: 10 }}
                        >
                            <Ionicons
                                name="arrow-back"
                                size={24}
                                color="black"
                            />
                        </Pressable>
                    ),
                }}
            />
            <Stack.Screen
                name="add-delivery"
                options={{
                    headerTitle: "Delivery Trucker",
                    headerLeft: () => (
                        <Pressable
                            onPress={() => router.back()}
                            style={{ paddingRight: 10 }}
                        >
                            <Ionicons
                                name="arrow-back"
                                size={24}
                                color="black"
                            />
                        </Pressable>
                    ),
                }}
            />
            <Stack.Screen
                name="[id]/edit-delivery"
                options={{
                    headerTitle: "Delivery Trucker",
                    headerLeft: () => (
                        <Pressable
                            onPress={() => router.back()}
                            style={{ paddingRight: 10 }}
                        >
                            <Ionicons
                                name="arrow-back"
                                size={24}
                                color="black"
                            />
                        </Pressable>
                    ),
                }}
            />
        </Stack>
    );
}
