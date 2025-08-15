import { create, type StateCreator } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";
import createSelectors from "./selectors";

type AuthState = {
  accessToken: string | null;
  user: null;
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
};

const createAuthSlice: StateCreator<AuthState> = (set) => ({
  accessToken: null,
  user: null,
  setAccessToken: (token) => set({ accessToken: token }),
  clearAccessToken: () => set({ accessToken: null }),
});

type StoreType = AuthState;

export const useStoreBase = create<StoreType>()(
  devtools(
    persist(
      immer((...a) => ({
        ...createAuthSlice(...a),
      })),
      {
        name: "session-storage",
        storage: {
          getItem: (name) => {
            const item = sessionStorage.getItem(name);
            return item ? JSON.parse(item) : null;
          },
          setItem: (name, value) => {
            sessionStorage.setItem(name, JSON.stringify(value));
          },
          removeItem: (name) => {
            sessionStorage.removeItem(name);
          },
        },
      }
    )
  )
);

export const useStore = createSelectors(useStoreBase);
