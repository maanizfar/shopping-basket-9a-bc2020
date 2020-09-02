import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Product from './Product';

describe('Product', () => {
    let root: RenderResult;

    beforeEach(() => {
        root = render(
            <Product
                title="title"
                description="description"
                imageUrl="/ps4pro.jpg"
                added={false}
                onClick={jest.fn()}
            />,
        );
    });

    test('should add to cart button', () => {
        expect(root.getByText(/add to cart/i)).toBeInTheDocument();
    });

    test('should render title', () => {
        expect(root.getByText('title')).toBeInTheDocument();
    });

    test('should render description', () => {
        expect(root.getByText('description')).toBeInTheDocument();
    });

    test('should render image', () => {
        expect(root.getByTestId('image')).toBeInTheDocument();
    });
});
