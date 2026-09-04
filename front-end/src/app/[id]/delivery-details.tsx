import { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "../../styles/colors";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
    cancelDelivery,
    confirmDelivery,
    getDeliveryDetails,
} from "@/src/services/delivery.service";
import { Delivery } from "@/src/types";

export default function DeliveryDetailsScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(true);
    const [deliveryDetails, setDeliveryDetails] = useState<Delivery | null>(
        null
    );
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchDeliveryDetails = async () => {
            try {
                const response = await getDeliveryDetails(id);

                setDeliveryDetails(response.data);
            } catch (error) {
                console.error("Error fetching delivery details:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchDeliveryDetails();
    }, []);

    async function handleConfirmDelivery() {
        try {
            await confirmDelivery(id);

            return router.navigate("/");
        } catch (error) {
            console.error("Error cancelling delivery:", error);
        }
    }

    async function handleCancelDelivery() {
        try {
            await cancelDelivery(id);

            return router.navigate("/");
        } catch (error) {
            console.error("Error cancelling delivery:", error);
        }
    }

    return (
        <ScrollView
            contentContainerStyle={[styles.container, styles.scrollContent]}
        >
            {loading && <Text>Loading delivery details...</Text>}

            {error && !loading && (
                <Text>
                    No delivery details available. Please check the delivery ID
                    or try again later.
                </Text>
            )}

            {deliveryDetails && (
                <>
                    <View style={styles.headerRow}>
                        <Text style={styles.idText}>
                            ID: {deliveryDetails._id}
                        </Text>
                        {deliveryDetails.status === "pending" ? (
                            <View style={styles.pendingBadge}>
                                <Ionicons
                                    name="ellipsis-horizontal-circle"
                                    size={14}
                                    color="#D97706"
                                />
                                <Text style={styles.pendingBadgeText}>
                                    pending
                                </Text>
                            </View>
                        ) : (
                            <View style={styles.deliveredBadge}>
                                <Ionicons
                                    name="ellipsis-horizontal-circle"
                                    size={14}
                                    color="#065F46"
                                />
                                <Text style={styles.deliveredBadgeText}>
                                    delivered
                                </Text>
                            </View>
                        )}
                    </View>

                    <Text style={styles.nameText}>
                        {deliveryDetails.recipientName}
                    </Text>

                    <View style={styles.dateRow}>
                        <View style={styles.dateItem}>
                            <Ionicons
                                name="calendar-outline"
                                size={14}
                                color="#64748B"
                            />
                            <Text style={styles.dateText}>
                                Created:{" "}
                                {new Date(
                                    deliveryDetails.createdAt
                                ).toLocaleDateString()}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Ionicons
                                name="location-outline"
                                size={20}
                                color="#1E3A8A"
                            />
                            <Text style={styles.cardTitle}>
                                Delivery Address
                            </Text>
                        </View>
                        <View style={styles.divider} />
                        <Text style={styles.cardBodyText}>
                            {deliveryDetails.address}
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.instructionLabel}>
                            Delivery Instructions
                        </Text>
                        <Text style={styles.instructionText}>
                            Please leave package behind the potted plants near
                            the front door. Do not ring doorbell, baby sleeping.
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.confirmButton}
                        onPress={handleConfirmDelivery}
                    >
                        <Ionicons
                            name="checkmark-circle-outline"
                            size={20}
                            color="white"
                        />
                        <Text style={styles.buttonText}>Confirm Delivery</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={() => router.navigate(`/${id}/edit-delivery`)}
                    >
                        <MaterialIcons
                            name="edit"
                            size={14}
                            color={colors.blue}
                            style={{
                                width: 20,
                                height: 20,
                                borderWidth: 1,
                                borderColor: colors.blue,
                                borderRadius: 20 / 2,
                                padding: 2,
                            }}
                        />
                        <Text
                            style={[styles.buttonText, { color: colors.blue }]}
                        >
                            Edit Delivery
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={handleCancelDelivery}
                    >
                        <Ionicons
                            name="close-circle-outline"
                            size={20}
                            color="white"
                        />
                        <Text style={styles.buttonText}>Cancel Delivery</Text>
                    </TouchableOpacity>
                </>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8FAFC",
    },
    scrollContent: {
        padding: 20,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    idText: {
        fontSize: 12,
        color: "#64748B",
        fontWeight: "600",
        letterSpacing: 0.5,
    },
    pendingBadge: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FEF3C7",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        gap: 4,
    },
    pendingBadgeText: {
        fontSize: 10,
        color: "#D97706",
        fontWeight: "700",
        letterSpacing: 0.5,
    },
    deliveredBadge: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#D1FAE5",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        gap: 4,
    },
    deliveredBadgeText: {
        fontSize: 10,
        color: colors.green,
        fontWeight: "700",
        letterSpacing: 0.5,
    },
    nameText: {
        fontSize: 28,
        fontWeight: "800",
        color: "#0F172A",
        marginBottom: 12,
    },
    dateRow: {
        flexDirection: "row",
        gap: 16,
        marginBottom: 24,
    },
    dateItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    dateText: {
        fontSize: 12,
        color: "#475569",
        fontWeight: "500",
    },
    card: {
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E2E8F0",
        padding: 16,
        marginBottom: 16,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginBottom: 12,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#1E3A8A",
    },
    divider: {
        height: 1,
        backgroundColor: "#E2E8F0",
        marginBottom: 12,
    },
    cardBodyText: {
        fontSize: 15,
        color: "#334155",
        lineHeight: 22,
    },
    instructionLabel: {
        fontSize: 12,
        fontWeight: "600",
        color: "#94A3B8",
        marginBottom: 8,
    },
    instructionText: {
        fontSize: 14,
        color: "#475569",
        lineHeight: 20,
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#EFF6FF",
        borderWidth: 1,
        borderColor: "#BFDBFE",
        padding: 12,
        borderRadius: 6,
        marginBottom: 20,
        marginTop: 8,
        gap: 12,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: "#94A3B8",
        borderRadius: 4,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    checkboxChecked: {
        backgroundColor: "#1E3A8A",
        borderColor: "#1E3A8A",
    },
    checkboxText: {
        fontSize: 14,
        color: "#1E293B",
        flex: 1,
    },
    confirmButton: {
        backgroundColor: colors.blue,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        gap: 8,
    },
    editButton: {
        backgroundColor: colors.background,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: colors.blue,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        gap: 8,
    },
    cancelButton: {
        backgroundColor: colors.red,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        borderRadius: 8,
        gap: 8,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
});
