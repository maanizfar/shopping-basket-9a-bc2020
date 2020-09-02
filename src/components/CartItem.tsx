import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {
    ListItem,
    Divider,
    ListItemText,
    ListItemAvatar,
    ListItemSecondaryAction,
    IconButton,
    Avatar,
    Typography,
} from '@material-ui/core';
import { store, removeProduct } from '../store';

const useStyles = makeStyles((theme: Theme) => ({
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
}));

type CartItemProps = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
};

const CartItem: React.FC<CartItemProps> = ({
    id,
    title,
    imageUrl,
    description,
    price,
}: CartItemProps) => {
    const classes = useStyles({});

    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={title} src={imageUrl} />
                </ListItemAvatar>
                <ListItemText
                    primary={title}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                ${(price / 100).toFixed(2)}
                            </Typography>
                            {` - ${description}`}
                        </React.Fragment>
                    }
                />
                <ListItemSecondaryAction>
                    <IconButton
                        data-testid="delete"
                        edge="end"
                        aria-label="delete"
                        onClick={() => store.dispatch(removeProduct({ id }))}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
};

export default CartItem;
