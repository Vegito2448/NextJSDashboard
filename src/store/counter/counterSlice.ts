import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 0,
  isReady: false
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initialCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;
      state.count = action.payload;
      state.isReady = true;
    },
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      if (state.count <= 0) return;
      state.count--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      if (state.count <= 0) return;
      state.count += action.payload;
    },
    resetCounter: (state) => {
      state = initialState;
    }
  }
});

export const { decrement, increment, incrementByAmount, resetCounter, initialCounterState } = counterSlice.actions;
