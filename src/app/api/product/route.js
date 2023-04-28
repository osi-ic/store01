// import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// const prisma = new PrismaClient();

export const GET = async () => {
  // const products = await prisma.post.findMany({});
  const products = [
    {
      id: 1,
      title: "Tank Amerika",
      price: 45000,
      content: "Gw mau jajah kenapa muahaha",
    },
    {
      id: 2,
      title: "Pesawat Nazi",
      price: 500,
      content: "sama gw juga",
    },
    {
      id: 3,
      title: "Benda ajaib melayang",
      price: 666,
      content: "duar",
    },
    {
      id: 4,
      title: "Pak Hitler",
      price: 10000,
      content: "progamer",
    },
    {
      id: 5,
      title: "Jukut",
      price: 0,
      content: "gratis gak ada harganya",
    },
    {
      id: 6,
      title: "pahala",
      price: 100000000,
      content: "stonk nih",
    },
  ];
  return NextResponse.json({ products });
};
