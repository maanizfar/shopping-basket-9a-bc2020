import { createSlice, configureStore } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './state';

const basketSlice = createSlice({
    name: 'basket',
    initialState: INITIAL_STATE,
    reducers: {
        addProduct: (state, action) => {
            return state.map((item) => {
                if (item.id !== action.payload.id) {
                    return item;
                }

                return {
                    ...item,
                    added: true,
                };
            });
        },
        removeProduct: (state, action) => {
            return state.map((item) => {
                if (item.id !== action.payload.id) {
                    return item;
                }

                return {
                    ...item,
                    added: false,
                };
            });
        },
    },
});

const store = configureStore({ reducer: basketSlice.reducer });

export const { addProduct, removeProduct } = basketSlice.actions;

export { basketSlice, store };
