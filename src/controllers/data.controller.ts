import { Request, Response, NextFunction } from "express";
import prisma from "../utils/prisma";
import { CreateDataDTO } from "../interface/data";

// @desc    Create a new message
// @route   POST /v1/data/write
export const createData = async (req: Request<{}, {}, CreateDataDTO>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    const newData = await prisma.data.create({
      data: { message },
    });

    res.status(201).json({
      success: true,
      message: "Data created successfully",
      data: newData,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all messages
// @route   GET /v1/data/read
export const getData = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const allData = await prisma.data.findMany({});

    res.status(200).json({
      success: true,
      count: allData.length,
      data: allData,
    });
  } catch (error) {
    next(error);
  }
};
