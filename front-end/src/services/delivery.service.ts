import axios from "axios";

export const getDeliveryDetails = async (deliveryId: string | string[]) =>
    await axios.get(`http://localhost:3000/api/deliveries/${deliveryId}`);
