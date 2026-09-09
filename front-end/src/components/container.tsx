import { ReactNode } from "react";
import { View } from "react-native";

export default function Container({ children }: { children: ReactNode }) {
    return <View className="flex-1 bg-[#F8FAFC]">{children}</View>;
}