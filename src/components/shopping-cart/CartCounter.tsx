'use client';

import { decrement, increment, initialCounterState, useAppDispatch, useAppSelector } from "@/store";
import { useEffect } from "react";
interface Props {
  value?: number;
}

interface CounterResponse {
  count: number;
  method: string;
}

const getApiCounter = async () => {
  const response = await fetch("/api/counter");
  const data = await response.json();
  return data;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const { count } = useAppSelector(({ counter }) => counter);

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   // dispatch(resetCounter());
  //   dispatch(initialCounterState(value));

  // }, [dispatch, value]);

  useEffect(() => {

    getApiCounter().then((data: CounterResponse) => {
      dispatch(initialCounterState(data.count));
    });

  }, [dispatch]);

  // const increaseBy = (value: number) => dispatch(incrementByAmount(Math.max(count + value, 0)));

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition ease-in-out duration-150 w[100px] mr-2"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition ease-in-out duration-150 w[100px] mr-2"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
      </div>
    </>
  );
};
