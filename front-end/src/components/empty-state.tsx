import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function EmptyState({ hasSearch }: { hasSearch: boolean }) {
    return (
        <View className="items-center justify-center gap-3 px-8 py-16">
            <Ionicons
                name={hasSearch ? "search-outline" : "cube-outline"}
                size={48}
                color="#94A3B8"
            />
            <Text className="text-center text-sm text-[#64748B]">
                {hasSearch
                    ? "No deliveries match your search."
                    : "No deliveries yet."}
            </Text>
            {!hasSearch && (
                <Link href="/add-delivery" asChild>
                    <Pressable className="rounded-md bg-[#1E3A8A] px-5 py-2.5">
                        <Text className="text-sm font-semibold text-white">
                            Create a delivery
                        </Text>
                    </Pressable>
                </Link>
            )}
        </View>
    );
}