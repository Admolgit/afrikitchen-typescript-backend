import { AnyAaaaRecord } from "dns";
import { Request, Response } from "express";
import Order from "../models/order.models";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { name, address, posterCode, city } = req.body;

    const order = await Order.create({
      name: name,
      address: address,
      posterCode: posterCode,
      city: city,
    });

    return res.status(201).json({
      message: `Order created successfully`,
      order: order,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const getOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      res.status(204).json({
        message: "No orders",
      });
    } else {
      return res.status(200).json({
        message: "Order fetched successfully",
        orders: order,
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find({});

    if (!orders) {
      res.status(204).json({
        message: "No orders",
      });
    } else {
      return res.status(200).json({
        message: "Order fetched successfully",
        orders: orders,
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const orderUpdated = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if(!orderUpdated) {
      res.status(404).json({ message: "Order not found"})
    } else {
      return res.status(200).json({ 
        message: "Order updated successful",
        orderUpdate: orderUpdated
      })
    }
  } catch (error: any) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message
    })
  }
}

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const orderDeleted = await Order.findByIdAndDelete(req.params.id);

    if(!orderDeleted) {
      res.status(404).json({ message: "Order not found"})
    } else {
      return res.status(200).json({ 
        message: "Order deleted successful",
      })
    }
  } catch (error: any) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message
    })
  }
}
