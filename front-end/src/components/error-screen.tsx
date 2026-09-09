import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export default function ErrorScreen({
    onRetry,
}: {
    onRetry: () => void;
}) {
    return (
        <View className="flex-1 items-center justify-center gap-3 bg-[#F8FAFC] px-8">
            <Ionicons name="alert-circle-outline" size={48} color="#B91C1C" />
            <Text className="text-center text-sm text-[#64748B]">
                Could not load deliveries. Please check your connection and try
                again.
            </Text>
            <Pressable
                className="rounded-md bg-[#1E3A8A] px-5 py-2.5"
                onPress={onRetry}
            >
                <Text className="text-sm font-semibold text-white">Retry</Text>
            </Pressable>
        </View>
    );
}