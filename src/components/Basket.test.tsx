import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Basket from './Basket';

describe('Basket', () => {
    let root: RenderResult;

    beforeEach(() => {
        root = render(
            <Provider store={store}>
                <Basket />
            </Provider>,
        );
    });

    test('should render heading', () => {
        expect(root.getByText('Shopping Basket')).toBeInTheDocument();
    });

    test('should render cart items', () => {
        expect(root.getByTestId('cartItemList')).toBeInTheDocument();
    });
});
