import axios from "axios";
import { Delivery } from "../types";

export const getDeliveryDetails = async (deliveryId: string | string[]) =>
    await axios.get(`http://localhost:3000/api/deliveries/${deliveryId}`);

export const addDelivery = async (delivery: Delivery) =>
    await axios.post(`http://192.168.20.235:3000/api/deliveries`, delivery);
