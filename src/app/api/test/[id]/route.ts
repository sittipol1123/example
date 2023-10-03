import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const slug = params.id;
    const result = await prisma.test.findFirst({
        where: {
            id: Number(slug)
        }
    })
    return NextResponse.json({ message: "recived", data: result });
  } catch (error) {
    console.log(error);
  }
};

export const PUT =async (req: Request, { params }: { params: { id: string } }) => {
    try {
        const slug = params.id;
        const { title } = await req.json();
        const result = await prisma.test.update({
            where: {
                id: Number(slug)
            },
            data: {
                data: title
            }
        })
        if(result){
            return NextResponse.json({message: "success"});
        }else{
            return NextResponse.json({message: "failed"});
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "error"});
    }
}

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const slug = params.id;
    console.log(slug);
    return NextResponse.json({ message: "deleted" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: "error"});
  }
};
