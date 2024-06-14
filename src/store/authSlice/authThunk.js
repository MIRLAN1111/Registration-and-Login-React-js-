import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const authPost = createAsyncThunk(
	"auth/postAuth",
	async ({ newDate, navigate }, { rejectWithValue }) => {
		try {
			await axios.post(`${BASE_URL}/api/auth/signUpForClient`, newDate);
			navigate("/signIn");
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const authPostIn = createAsyncThunk(
	"authIn/postauthIn",
	async ({ newDate, navigate }, { rejectWithValue }) => {
		try {
			await axios.post(`${BASE_URL}/api/auth/signIn`, newDate);
			navigate("/homePage");
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
