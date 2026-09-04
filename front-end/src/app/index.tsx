import "@/global.css";
import { Link } from "expo-router";
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
            <Link href="/6a9a8e399ca98a88b6b7f66d/delivery-details">
                Do to Delivery Details
            </Link>
            <Link href="/add-delivery">Add Delivery</Link>
            <Link href="/6a9a8e399ca98a88b6b7f66d/edit-delivery">Update</Link>
        </View>
    );
}
