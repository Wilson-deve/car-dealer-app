import ClassifiedCard from "@/components/inventory/classified-card";
import ClassifiedList from "@/components/inventory/classified-list";
import { AwaitedPageProps, PageProps } from "@/config/type";
import { prisma } from "@/lib/prisma";
import React from "react";

const getInventory = async (searchParams: AwaitedPageProps["searchParams"]) => {
  return prisma.classified.findMany({
    include: {
      images: true,
    },
  });
};

const InventoryPage = async (props: PageProps) => {
  const searchParams = await props.searchParams;
  const classifieds = await getInventory(searchParams);
  const count = await prisma.classified.count();
  return (
    <>
      <ClassifiedList classifieds={classifieds} />
    </>
  );
};

export default InventoryPage;
