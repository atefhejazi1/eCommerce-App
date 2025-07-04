import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils";

const actLikeToggle = createAsyncThunk(
  "whilst/actLikeToggle",
  async (id: number, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;

    try {
      const isRecordExist = await axios.get(
        `/wishlist?userId=1&productId=${id}`,
        {
          signal,
        }
      );

      if (isRecordExist.data.length > 0) {
        await axios.delete(`/wishlist/${isRecordExist.data[0].id}`, {
          signal,
        });
        return { type: "remove", id };
      } else {
        await axios.post(
          `/wishlist`,
          { userId: "1", productId: id },
          {
            signal,
          }
        );
        return { type: "add", id };
      }
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actLikeToggle;
