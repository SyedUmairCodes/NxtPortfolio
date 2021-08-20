import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../data";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(services);
  res.status(200).json({ services });
};
