import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="[id]/delivery-details" />
            <Stack.Screen name="[id]/add-delivery" />
            <Stack.Screen name="[id]/edit-delivery" />
        </Stack>
    );
}
