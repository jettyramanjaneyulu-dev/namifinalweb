// import type { NextApiRequest, NextApiResponse } from "next";
// import { connectDB } from "@/lib/db";
// import Blog from "@/models/Blog";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   try {
//     await connectDB();
//     const blog = await Blog.create(req.body);
//     res.status(201).json(blog);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to save blog" });
//   }
// }
