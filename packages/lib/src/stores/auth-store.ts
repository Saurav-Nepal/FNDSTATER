import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { User } from "../types";

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  
  // Actions
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        isAuthenticated: false,
        isLoading: false,

        setUser: (user) =>
          set({
            user,
            isAuthenticated: !!user,
          }),

        setLoading: (isLoading) => set({ isLoading }),

        login: (user) =>
          set({
            user,
            isAuthenticated: true,
            isLoading: false,
          }),

        logout: () =>
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          }),

        updateUser: (updates) => {
          const currentUser = get().user;
          if (currentUser) {
            set({
              user: { ...currentUser, ...updates },
            });
          }
        },
      }),
      {
        name: "auth-storage",
        partialize: (state) => ({
          user: state.user,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    ),
    {
      name: "auth-store",
    }
  )
);