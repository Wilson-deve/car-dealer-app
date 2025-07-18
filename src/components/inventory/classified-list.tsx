import { ClassifiedWithImages } from "@/config/type";
import React from "react";
import ClassifiedCard from "./classified-card";

interface ClassifiedListProps {
  classifieds: ClassifiedWithImages[];
}

const ClassifiedList = (props: ClassifiedListProps) => {
  const { classifieds } = props;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {classifieds.map((classified) => (
        <ClassifiedCard key={classified.id} classified={classified} />
      ))}
    </div>
  );
};

export default ClassifiedList;
