import { ActivityIndicator, Text, View } from "react-native";

export default function LoadingScreen() {
    return (
        <View className="flex-1 items-center justify-center gap-3 bg-[#F8FAFC]">
            <ActivityIndicator size="large" color="#1E3A8A" />
            <Text className="text-sm text-[#64748B]">
                Loading deliveries...
            </Text>
        </View>
    );
}