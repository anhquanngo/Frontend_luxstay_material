import { createAsyncThunk } from "@reduxjs/toolkit";
import { moduleName } from "./const";

export const fetchUser = createAsyncThunk(
  `${moduleName}/fetchUser`,
  async (cb) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((res) => res.json());

    if (cb && "function" === typeof cb) {
      cb(response);
    }
    return true;
  }
);
