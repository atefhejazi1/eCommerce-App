import { createSlice } from "@reduxjs/toolkit";
import { record } from "zod";

type TToast = {
  id: string;
  type: "primary" | "success" | "warning" | "danger";
  title?: string | null;
  message: string;
};

interface IToastsSlice {
  records: TToast[];
}
const initialState: IToastsSlice = {
  records: [
    {
      id: "1",
      type: "success",
      title: "Add To Cart",
      message: "item Added to your cart",
    },
    {
      id: "2",
      type: "danger",
      message: "error from the server",
    },
    {
      id: "3",
      type: "warning",
      message: "your session will expired very soon",
    },
    {
      id: "4",
      type: "primary",
      message: "test test",
    },
  ],
};
const ToastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {},
});

export default ToastsSlice.reducer;
