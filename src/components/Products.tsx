import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import { ProductItem } from '../global';
import { store, addProduct } from '../store';
import Product from './Product';

const Products = () => {
    const products = useSelector((state: ProductItem[]) => state);

    return (
        <Grid container spacing={2} data-testid="container">
            {products.map((product: ProductItem) => (
                <Grid key={product.id} item xs={12} sm={4}>
                    <Product
                        title={product.title}
                        description={product.description}
                        imageUrl={product.imageUrl}
                        added={product.added}
                        onClick={() => store.dispatch(addProduct(product))}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default Products;
