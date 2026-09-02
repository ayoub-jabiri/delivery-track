import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles/colors";

export default function DeliveryDetailsScreen() {
    const [isConfirmed, setIsConfirmed] = useState(false);

    return (
        <ScrollView
            contentContainerStyle={[styles.container, styles.scrollContent]}
        >
            <View style={styles.headerRow}>
                <Text style={styles.idText}>ID: TRK-9824-A7X</Text>
                <View style={styles.badge}>
                    <Ionicons
                        name="ellipsis-horizontal-circle"
                        size={14}
                        color="#D97706"
                    />
                    <Text style={styles.badgeText}>PENDING</Text>
                </View>
            </View>

            <Text style={styles.nameText}>Sarah Jenkins</Text>

            <View style={styles.dateRow}>
                <View style={styles.dateItem}>
                    <Ionicons
                        name="calendar-outline"
                        size={14}
                        color="#64748B"
                    />
                    <Text style={styles.dateText}>Created: Oct 24, 2023</Text>
                </View>
                <View style={styles.dateItem}>
                    <Ionicons name="time-outline" size={14} color="#64748B" />
                    <Text style={styles.dateText}>Updated: 2 hrs ago</Text>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Ionicons
                        name="location-outline"
                        size={20}
                        color="#1E3A8A"
                    />
                    <Text style={styles.cardTitle}>Delivery Address</Text>
                </View>
                <View style={styles.divider} />
                <Text style={styles.cardBodyText}>
                    4822 Birchwood Lane{"\n"}
                    Apt 3B{"\n"}
                    Seattle, WA 98109
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.instructionLabel}>
                    Delivery Instructions
                </Text>
                <Text style={styles.instructionText}>
                    Please leave package behind the potted plants near the front
                    door. Do not ring doorbell, baby sleeping.
                </Text>
            </View>

            <TouchableOpacity
                style={styles.checkboxContainer}
                activeOpacity={0.7}
                onPress={() => setIsConfirmed(!isConfirmed)}
            >
                <View
                    style={[
                        styles.checkbox,
                        isConfirmed && styles.checkboxChecked,
                    ]}
                >
                    {isConfirmed && (
                        <Ionicons name="checkmark" size={16} color="white" />
                    )}
                </View>
                <Text style={styles.checkboxText}>
                    I confirm arrival at the correct address.
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.confirmButton}>
                <Ionicons
                    name="checkmark-circle-outline"
                    size={20}
                    color="white"
                />
                <Text style={styles.buttonText}>Confirm Delivery</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton}>
                <Ionicons name="close-circle-outline" size={20} color="white" />
                <Text style={styles.buttonText}>Cancel Delivery</Text>
            </TouchableOpacity>
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
    badge: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FEF3C7",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        gap: 4,
    },
    badgeText: {
        fontSize: 10,
        color: "#D97706",
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
