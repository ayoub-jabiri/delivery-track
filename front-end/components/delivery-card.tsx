import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { Delivery } from "@/src/types";
import StatusBadge from "./status-badge";

export default function DeliveryCard({ delivery }: { delivery: Delivery }) {
    return (
        <View className="rounded-lg border border-[#E2E8F0] bg-white p-4">
            <View className="flex-row items-center justify-between gap-2">
                <Text className="flex-1 text-base font-semibold text-[#0F172A]">
                    {delivery.recipientName}
                </Text>
                <StatusBadge status={delivery.status} />
            </View>
            <View className="mt-2 flex-row items-start gap-1">
                <Ionicons name="location-outline" size={14} color="#64748B" />
                <Text className="flex-1 text-sm text-[#475569]" numberOfLines={2}>
                    {delivery.address}
                </Text>
            </View>
        </View>
    );
}