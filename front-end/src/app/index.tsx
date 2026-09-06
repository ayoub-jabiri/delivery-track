import "@/global.css";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable } from "react-native";
import Container from "@/components/container";
import DeliveryCard from "@/components/delivery-card";
import EmptyState from "@/components/empty-state";
import ErrorScreen from "@/components/error-screen";
import LoadingScreen from "@/components/loading-screen";
import SearchBar from "@/components/search-bar";
import { getAllDeliveries } from "@/src/services/delivery.service";
import { Delivery } from "@/src/types";

export default function HomeScreen() {
    const [query, setQuery] = useState("");

    const { data: deliveries, isLoading, isError, refetch } = useQuery<Delivery[]>({
        queryKey: ["deliveries"],
        queryFn: async () => (await getAllDeliveries()).data,
    });

    const filtered = query
        ? (deliveries ?? []).filter((delivery) => {
              const term = query.toLowerCase();
              return (
                  delivery.recipientName.toLowerCase().includes(term) ||
                  delivery.address.toLowerCase().includes(term)
              );
          })
        : (deliveries ?? []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    if (isError) {
        return <ErrorScreen onRetry={refetch} />;
    }

    return (
        <Container>
            <FlatList
                data={filtered}
                keyExtractor={(item) => item._id ?? item.recipientName}
                contentContainerClassName="gap-3 p-4"
                ListHeaderComponent={
                    <SearchBar value={query} onChangeText={setQuery} />
                }
                renderItem={({ item }) => (
                    <Link href={`/${item._id}/delivery-details`} asChild>
                        <Pressable>
                            <DeliveryCard delivery={item} />
                        </Pressable>
                    </Link>
                )}
                ListEmptyComponent={<EmptyState hasSearch={query.length > 0} />}
            />
        </Container>
    );
}