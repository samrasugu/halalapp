import { API_URL } from "@/utils/utils";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const businesses = await fetch(`${API_URL}/`);
    const data = await businesses.json();

    res.status(200).json(data);
  }
}
