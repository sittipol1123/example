import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import formidable, { Fields, Files } from "formidable";
import fs from "fs/promises";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export const GET = async (req: Request) => {
  console.log(req);
  return NextResponse.json([]);
};

const readFile = (
  req: NextApiRequest,
  saveLocal: boolean
): Promise<{ fields: Fields; files: Files }> => {
  const options: formidable.Options = {};
  if (saveLocal) {
    options.uploadDir = path.join(process.cwd(), "/public/uploads");
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + "_" + path.originalFilename;
    };
  }
  options.maxFileSize = 1024 * 1024 * 10;
  options.keepExtensions = true;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });

};

export const POST = async (req: NextApiRequest) => {
  try {
    await fs.readdir(path.join(process.cwd() + "/public", "/uploads"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/uploads"));
  }
  const { fields, files } = await readFile(req, true);
  return NextResponse.json({ message: "sss" });
  // try {
  //   const { title, content } = await req.json();
  //   const result = await prisma.test.create({
  //     data: {
  //       data: JSON.stringify({ title, content }),
  //     },
  //   });
  //   if (result) {
  //     return NextResponse.json({ message: "ok", datais: [title, content] });
  //   } else {
  //     return NextResponse.json({ message: "error", datais: [title, content] });
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
};
