import create from "zustand";

type StoreTypes = {
  isLinks: boolean;
  setIsLinks: (arg: boolean) => void;
};

export const useStore = create<StoreTypes>((set) => ({
  isLinks: true,
  setIsLinks: (isLinks: boolean) => set({ isLinks }),
}));
