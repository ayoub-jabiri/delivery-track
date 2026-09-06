import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

type SearchBarProps = React.ComponentProps<typeof TextInput>;
export default function SearchBar(props: SearchBarProps) {
  return (
    <View className="flex-row items-center rounded-md border border-[#CBD5E1] bg-white px-3 py-2.5">
      <Ionicons name="search" size={18} color="#6B7280" />
      <TextInput
        className="ml-2 flex-1 p-0 text-sm text-[#1E293B]"
        placeholder="Search by recipient or address"
        placeholderTextColor="#9CA3AF"
        autoCapitalize="none"
        {...props}
      />
    </View>
  );
}
