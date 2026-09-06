import { Text, View } from "react-native";
import { DeliveryStatus } from "@/src/types";

export default function StatusBadge({
    status,
}: {
    status: DeliveryStatus;
}) {
    const pending = status === "pending";

    return (
        <View
            className={`${
                pending ? "bg-[#FEF3C7]" : "bg-[#D1FAE5]"
            } rounded-full px-2.5 py-1`}
        >
            <Text
                className={`${
                    pending ? "text-[#D97706]" : "text-[#065F46]"
                } text-[10px] font-bold tracking-wide`}
            >
                {status}
            </Text>
        </View>
    );
}