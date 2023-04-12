import { Request, Response } from "express";
import Dishes from "../models/dishes.models";

export const createDishes = async (req: Request, res: Response) => {
  try {
    // const dishes = await Dishes.create(req.body);
    const { name, price, description } = req.body;
    const newDishes = new Dishes({
      name,
      price,
      description,
    });
    const dishes = await newDishes.save();
    return res.status(201).json({
      message: "Dish successfully created",
      dishe: dishes,
    });
  } catch (error) {
    return res.status(500).json({ 
      message: "Something went wrong",
    });
  }
};

export const getDishes = async (req: Request, res: Response) => {
  try {
    const dishes = await Dishes.find({});

    if(!dishes) {
      res.status(204).json({
        message: "No dish found"
      })
    } else {
      res.status(200).json({
        Message: "Dishes fetched successfully",
        dishes: dishes
      })
    }

  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}


