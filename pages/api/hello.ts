// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from "fs";
import path from "path";

type Data = {
  name: string
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }


export default async function presentation(req: NextApiRequest,
                                     res: NextApiResponse<Data>){
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  res.write(fs.readFileSync(path.resolve(__dirname,"../../../../src/infoPresentation/index.html"), "utf-8"));
  res.end();
}