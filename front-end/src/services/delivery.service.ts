import axios from "axios";
import { Delivery } from "../types";

export const getDeliveryDetails = async (deliveryId: string | string[]) =>
    await axios.get(`http://192.168.20.50:3000/api/deliveries/${deliveryId}`);

export const addDelivery = async (delivery: Delivery) =>
    await axios.post(`http://192.168.20.50:3000/api/deliveries`, delivery);

export const EditDelivery = async (
    deliveryId: string | string[],
    delivery: Delivery
) =>
    await axios.put(
        `http://192.168.20.50:3000/api/deliveries/${deliveryId}`,
        delivery
    );

export const confirmDelivery = async (deliveryId: string | string[]) =>
    await axios.patch(
        `http://192.168.20.50:3000/api/deliveries/${deliveryId}/confirm`
    );

export const cancelDelivery = async (deliveryId: string | string[]) =>
    await axios.delete(
        `http://192.168.20.50:3000/api/deliveries/${deliveryId}`
    );
