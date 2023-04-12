import { Request, Response } from 'express';
import Dishes from "../models/dishes.models";

const createDishes = async (req: Request, res: Response) => {

  console.log(req.body);
  try {
    // const dishes = await Dishes.create(req.body);
    const { name, description, price } = req.body;
    const newDishes = new Dishes({
      name,
      description,
      price,
    });
    const dishes = await newDishes.save();
    return res.status(201).json(dishes);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export default createDishes
