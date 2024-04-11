import { API_URL } from "@/utils/utils";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { location, category, searchTerm } = req.query;

      let url = `${API_URL}`;

      if (location) {
        url += `/country/${location}`;
      }

      if (category) {
        url += `/type/${category}`;
      }

      if (searchTerm) {
        url += `/name/${searchTerm}`;
      }

      //   if location and category are provided, the URL will be:
      if (location && category) {
        url = `${API_URL}/country/${location}/type/${category}`;
      }

      const businesses = await fetch(url);
      console.log(businesses);
      const data = await businesses.json();

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
