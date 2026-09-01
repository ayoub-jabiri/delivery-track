import "@/global.css";
import { Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View className="my-auto mx-2  rounded-2xl border bg-background px-4 py-3 ">
            <Text className="text-sm font-semibold uppercase tracking-wide text-primary ">
                NativeWind check
            </Text>
            <Text className="mt-1 text-base text-foreground ">
                This card is styled with className, so if you can see the
                colored box, NativeWind is working.
            </Text>
        </View>
    );
}
