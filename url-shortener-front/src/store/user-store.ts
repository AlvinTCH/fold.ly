import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { UserAuthProfile } from "@/src/entities";

// Define types for state & actions
interface UserStoreState {
  isHydrated: boolean;
  setHydrated: (status: boolean) => void;

  loggedInExpiry: string | null;
  setUserExpiry: (loggedInExpiry: string | null) => void;

  profile: UserAuthProfile | null;
  setUserProfile: (profile: UserAuthProfile | null) => void;

  clearData: () => void;
}

// Create store using the curried form of `create`
export const useUserStore = create<UserStoreState>()(
  persist(
    (set) => ({
      isHydrated: false,
      setHydrated: (status: boolean) => {
        set(() => ({
          isHydrated: status,
        }));
      },

      loggedInExpiry: null,
      setUserExpiry: (loggedInExpiry: string | null = null) => {
        set(() => ({
          loggedInExpiry: loggedInExpiry,
        }));
      },

      profile: null,
      setUserProfile: (profile: UserAuthProfile | null) => {
        set(() => ({
          profile: profile,
        }));
      },

      clearData: () => {
        set(() => ({
          loggedInExpiry: null,
          profile: null,
        }));
      },
    }),
    {
      name: "user-store",
      onRehydrateStorage(state) {
        // clear storage if user data has expired
        if (!state.loggedInExpiry) {
          state.isHydrated = true;
          return;
        }
        const isExpired = new Date() > new Date(state.loggedInExpiry);
        if (!isExpired) {
          state.isHydrated = true;
          return;
        }

        useUserStore.persist.clearStorage();

        state.loggedInExpiry = null;
        state.profile = null;
        state.isHydrated = true;
      },
    },
  ),
);
