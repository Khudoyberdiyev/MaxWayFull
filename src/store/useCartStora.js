import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useCartStore = create(
    persist(
        (set) => ({
            cartItems: [],
            isItemInCart: (itemId) => {
                return state.cartItems.some(item => item.id === itemId);
            },
            addToCart: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),
            removeFromCart: (id) => set((state) => ({ cartItems: state.cartItems.filter(item => item.id !== id) })),
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useCartStore;
