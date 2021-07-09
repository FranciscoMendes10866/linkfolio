import create, { SetState } from "zustand";
import { persist } from "zustand/middleware";

type StoreTypes = {
  isLinks: boolean;
  setIsLinks: (arg: boolean) => void;
};

const globalStore = (set: SetState<StoreTypes>) => ({
  isLinks: true,
  setIsLinks: (isLinks: boolean) => set({ isLinks }),
});

export const useStore = create<StoreTypes>(
  persist(globalStore, {
    name: "store",
    getStorage: () => localStorage,
  })
);
