import { create } from "zustand";

const useCartStore = create((set) => ({
  amount: 0,
  setAmount: (price) => set((state) => ({ amount: state.amount + price })),
  clearAmount: () => set({ amount: 0 }),
}));

export default useCartStore;
