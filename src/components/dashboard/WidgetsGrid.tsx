'use client';
import { useAppSelector } from "@/store";
import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";

export const WidgetsGrid = () => {
  const { count } = useAppSelector(({ counter }) => counter);


  return (
    <div
      className="flex flex-wrap p-2 items-center justify-center space-x-2"
    >
      <SimpleWidget
        label="Total Items"
        title={count.toString()}
        subTitle="Items in your cart"
        href="/dashboard/counter"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
      />
    </div>
  );
};
