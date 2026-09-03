import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Modal,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Delivery, DeliveryStatus } from "@/src/types";
import { addDelivery } from "../services/delivery.service";
import { useRouter } from "expo-router";
import { colors } from "./styles/colors";

export default function DeliveryForm() {
    const [delivery, setDelivery] = useState<Delivery>({
        recipientName: "",
        address: "",
        status: "pending",
    });

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    const statusOptions = ["pending", "delivered"];

    const handleSelectStatus = (selectedOption: DeliveryStatus) => {
        setDelivery({ ...delivery, status: selectedOption });
        setIsModalVisible(false);
    };

    async function handleSaveDelivery() {
        try {
            await addDelivery(delivery);

            return router.navigate("/");
        } catch (error) {
            const currentError: string = error.response?.data?.errors
                ? "You have to fill all the required data"
                : "Something went wrong";
            setError(error.response.data.errors);

            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.label}>Recipient Name</Text>
                <View style={styles.inputContainer}>
                    <Feather
                        name="user"
                        size={18}
                        color="#6B7280"
                        style={styles.icon}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. Jane Doe"
                        placeholderTextColor="#9CA3AF"
                        value={delivery.recipientName}
                        onChangeText={(val) =>
                            setDelivery({ ...delivery, recipientName: val })
                        }
                    />
                </View>

                <Text style={styles.label}>Delivery Address</Text>
                <View style={[styles.inputContainer, styles.textAreaContainer]}>
                    <Ionicons
                        name="location-outline"
                        size={20}
                        color="#6B7280"
                        style={styles.iconTop}
                    />
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="123 Logistics Way, Suite 100&#10;City, State, Zip"
                        placeholderTextColor="#9CA3AF"
                        multiline={true}
                        numberOfLines={3}
                        textAlignVertical="top"
                        value={delivery.address}
                        onChangeText={(val) =>
                            setDelivery({ ...delivery, address: val })
                        }
                    />
                </View>

                <Text style={styles.label}>Status</Text>
                <TouchableOpacity
                    style={styles.inputContainer}
                    activeOpacity={0.7}
                    onPress={() => setIsModalVisible(true)}
                >
                    <Text style={styles.dropdownText}>{delivery.status}</Text>
                    <Feather name="chevron-down" size={20} color="#6B7280" />
                </TouchableOpacity>

                <View style={styles.divider} />

                {error && (
                    <Text
                        style={{
                            paddingVertical: 30,
                            color: colors.red,
                            fontWeight: "bold",
                        }}
                    >
                        * {error}
                    </Text>
                )}

                <TouchableOpacity
                    style={styles.saveButton}
                    activeOpacity={0.8}
                    onPress={handleSaveDelivery}
                >
                    <Ionicons
                        name="save-outline"
                        size={18}
                        color="#FFFFFF"
                        style={{ marginRight: 8 }}
                    />
                    <Text style={styles.saveButtonText}>Save Delivery</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.cancelButton}
                    activeOpacity={0.7}
                >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>

            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setIsModalVisible(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setIsModalVisible(false)}
                >
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Status</Text>
                        {statusOptions.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.optionItem,
                                    delivery.status === item &&
                                        styles.selectedOptionItem,
                                ]}
                                onPress={() => handleSelectStatus(item)}
                            >
                                <Text
                                    style={[
                                        styles.optionText,
                                        delivery.status === item &&
                                            styles.selectedOptionText,
                                    ]}
                                >
                                    {item}
                                </Text>
                                {delivery.status === item && (
                                    <Feather
                                        name="check"
                                        size={18}
                                        color="#002B66"
                                    />
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F8FAFC",
        justifyContent: "center",
        padding: 20,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        padding: 16,
        borderWidth: 1,
        borderColor: "#E2E8F0",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    label: {
        fontSize: 12,
        fontWeight: "600",
        color: "#475569",
        marginBottom: 6,
        marginTop: 12,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#CBD5E1",
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: "#FFFFFF",
    },
    icon: {
        marginRight: 10,
    },
    iconTop: {
        marginRight: 10,
        marginTop: 2,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: "#1E293B",
        padding: 0,
    },
    textAreaContainer: {
        alignItems: "flex-start",
        height: 90,
    },
    textArea: {
        height: "100%",
    },
    dropdownText: {
        flex: 1,
        fontSize: 14,
        color: "#1E293B",
    },
    divider: {
        height: 1,
        backgroundColor: "#E2E8F0",
        marginVertical: 16,
    },
    saveButton: {
        backgroundColor: "#002B66",
        borderRadius: 4,
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    saveButtonText: {
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: 14,
    },
    cancelButton: {
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#1E3A8A",
        borderRadius: 4,
        paddingVertical: 12,
        alignItems: "center",
    },
    cancelButtonText: {
        color: "#1E3A8A",
        fontWeight: "600",
        fontSize: 14,
    },
    // Modal Styling
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    modalContent: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        padding: 16,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#1E293B",
        marginBottom: 12,
    },
    optionItem: {
        paddingVertical: 12,
        paddingHorizontal: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#F1F5F9",
    },
    selectedOptionItem: {
        backgroundColor: "#F0FDF4",
        borderRadius: 4,
    },
    optionText: {
        fontSize: 14,
        color: "#334155",
    },
    selectedOptionText: {
        color: "#002B66",
        fontWeight: "600",
    },
});
