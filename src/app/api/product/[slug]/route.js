import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const slug = params.slug;

  const getOneProduct = await prisma.product.findUnique({
    where: {
      slug,
    },
  });

  return NextResponse.json(getOneProduct);
}

export async function DELETE(request, { params }) {
  const slug = params.slug;

  const delProduct = await prisma.product.delete({
    where: {
      slug,
    },
  });

  return NextResponse.json({ slug, delProduct });
}

export async function PUT(request, { params }) {
  const slug = params.slug;
  const body = await request.json();

  const putProduct = await prisma.product.update({
    where: { slug },
    data: body,
  });

  return NextResponse.json({ slug, body, putProduct });
}
