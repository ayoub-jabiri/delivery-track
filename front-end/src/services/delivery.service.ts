import axios from "axios";
import { Delivery } from "../types";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

if (!API_URL) throw new Error("NEXT_PUBLIC_API_URL is not defined");

export const getAllDeliveries = async () =>
  await axios.get(`${API_URL}/api/deliveries`);

export const getDeliveryDetails = async (deliveryId: string | string[]) =>
  await axios.get(`${API_URL}/api/deliveries/${deliveryId}`);

export const addDelivery = async (delivery: Delivery) =>
  await axios.post(`${API_URL}/api/deliveries`, delivery);

export const EditDelivery = async (deliveryId: string | string[], delivery: Delivery) =>
  await axios.put(`${API_URL}/api/deliveries/${deliveryId}`, delivery);

export const confirmDelivery = async (deliveryId: string | string[]) =>
  await axios.patch(`${API_URL}/api/deliveries/${deliveryId}/confirm`);

export const cancelDelivery = async (deliveryId: string | string[]) =>
  await axios.delete(`${API_URL}/api/deliveries/${deliveryId}`);
