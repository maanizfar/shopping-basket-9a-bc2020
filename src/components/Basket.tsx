import React from 'react';
import { useSelector } from 'react-redux';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Typography } from '@material-ui/core';

import { ProductItem } from '../global';
import CartItem from './CartItem';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        inline: {
            display: 'inline',
        },
        listItem: {
            padding: theme.spacing(1, 0),
            justifyContent: 'flex-end',
        },
        total: {
            fontWeight: theme.typography.fontWeightBold,
            fontSize: theme.typography.fontSize * 2,
        },
    }),
);

const Basket = () => {
    const classes = useStyles({});
    const products = useSelector((state: ProductItem[]) => state);

    return (
        <>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Shopping Basket
            </Typography>
            <Typography component="p" variant="body1">
                You have {products.filter((product) => product.added).length} items in your basket
            </Typography>
            <List className={classes.root} data-testid="cartItemList">
                {products
                    .filter((product) => product.added)
                    .map((product: ProductItem) => (
                        <CartItem
                            key={product.id}
                            id={product.id}
                            imageUrl={product.imageUrl}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                        />
                    ))}
                <ListItem className={classes.listItem}>
                    <Typography variant="subtitle1" className={classes.total}>
                        Total: $
                        {(
                            products
                                .filter((product) => product.added)
                                .reduce((acc, current) => (acc += current.price), 0) / 100
                        ).toFixed(2)}
                    </Typography>
                </ListItem>
            </List>
        </>
    );
};

export default Basket;
