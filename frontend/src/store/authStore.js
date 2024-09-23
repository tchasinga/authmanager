/* eslint-disable no-unused-vars */
import { create } from "zustand";
import axios from "axios";

export const useAuthStore = create((set) => ({
    user: null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	message: null,

    signup: async (email, password, name) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`http://localhost:5000/api/auth/singup`, { email, password, name });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
		} catch (error) {
			set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
		}
	},

	verifyEmail: async (code) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`http://localhost:5000/api/auth/verifyemail`, { code });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
			return response.data;
		} catch (error) {
			set({ error: error.response.data.message || "Error verifying email", isLoading: false });
			throw error;
		}
	},

	checkAuth: async () => {
		set({ isCheckingAuth: true, error: null });
		try {
		  const response = await axios.get(`http://localhost:5000/api/auth/check-auth`);
		  set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
		} catch (error) {
		  set({ error: error.message, isCheckingAuth: false, isAuthenticated: false });
		}
	  },
}));