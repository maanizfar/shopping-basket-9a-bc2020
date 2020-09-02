import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import CartItem from './CartItem';

describe('Product', () => {
    let root: RenderResult;

    beforeEach(() => {
        root = render(
            <CartItem
                id="1"
                title="title"
                description="description"
                imageUrl="/ps4pro.jpg"
                price={20000}
            />,
        );
    });

    test('should delete button', () => {
        expect(root.getByTestId('delete')).toBeInTheDocument();
    });

    test('should render title', () => {
        expect(root.getByText('title')).toBeInTheDocument();
    });

    test('should render image', () => {
        expect(root.getByAltText('title')).toBeInTheDocument();
    });

    test('should render price', () => {
        expect(root.getByText('$200.00')).toBeInTheDocument();
    });
});
