import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import auth, { Login } from "../apis/auth";
const user = auth.getUser();
// https://www.bezkoder.com/react-redux-login-example-toolkit-hooks/

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password }: Login, thunkAPI) => {
    try {
      const response = await auth.signUp({ email, password });
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(setMessage("Unable to register."));
      return thunkAPI.rejectWithValue("register_fail");
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: Login, thunkAPI) => {
    try {
      const response = await auth.signIn({ email, password });
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(setMessage("Unable to login."));
      return thunkAPI.rejectWithValue("login_fail");
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await auth.signOut();
});

const initialState: { isLoggedIn: boolean; user: string | null } = user
  ? { isLoggedIn: true, user: auth.getUser() }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => (
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
      }),
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      })
  ),
});

export default authSlice.reducer;
