import Delivery from "../models/delivery.js";

export const getAllDeliveries = async (req, res, next) => {
  try {
    const deliveries = await Delivery.find().sort({ createdAt: -1 });
    res.status(200).json(deliveries);
  } catch (error) {
    next(error);
  }
};

export const getDeliveryById = async (req, res, next) => {
  try {
    const delivery = await Delivery.findById(req.params.id);
    if (!delivery) {
      return res.status(404).json({ error: "Delivery not found" });
    }
    res.status(200).json(delivery);
  } catch (error) {
    next(error);
  }
};

export const createDelivery = async (req, res, next) => {
  try {
    const { recipientName, address, status } = req.body;
    const delivery = await Delivery.create({ recipientName, address, status });
    res.status(201).json(delivery);
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ errors: messages });
    }
    next(error);
  }
};

export const updateDelivery = async (req, res, next) => {
  try {
    const { recipientName, address } = req.body;
    const delivery = await Delivery.findById(req.params.id);
    if (!delivery) {
      return res.status(404).json({ error: "Delivery not found" });
    }
    if (delivery.status === "delivered") {
      return res
        .status(400)
        .json({ error: "Cannot modify a delivered delivery" });
    }
    if (recipientName !== undefined) delivery.recipientName = recipientName;
    if (address !== undefined) delivery.address = address;
    await delivery.save();
    res.status(200).json(delivery);
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ errors: messages });
    }
    next(error);
  }
};

export const confirmDelivery = async (req, res, next) => {
  try {
    const delivery = await Delivery.findById(req.params.id);
    if (!delivery) {
      return res.status(404).json({ error: "Delivery not found" });
    }
    if (delivery.status === "delivered") {
      return res
        .status(400)
        .json({ error: "Delivery is already confirmed" });
    }
    delivery.status = "delivered";
    delivery.confirmedAt = new Date();
    await delivery.save();
    res.status(200).json(delivery);
  } catch (error) {
    next(error);
  }
};

export const deleteDelivery = async (req, res, next) => {
  try {
    const delivery = await Delivery.findByIdAndDelete(req.params.id);
    if (!delivery) {
      return res.status(404).json({ error: "Delivery not found" });
    }
    res.status(200).json({ message: "Delivery deleted successfully" });
  } catch (error) {
    next(error);
  }
};
