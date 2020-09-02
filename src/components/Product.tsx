import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '-2px -2px 10px 2px red, 2px 2px 10px 2px blue',
    },
    media: {
        minHeight: 200,
    },
});
type ProductProps = {
    title: string;
    description: string;
    imageUrl: string;
    added: boolean | undefined;
    onClick: () => void;
};

const Product: React.FC<ProductProps> = ({
    title,
    description,
    imageUrl,
    added,
    onClick,
}: ProductProps) => {
    const classes = useStyles({});

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    data-testid="image"
                    className={classes.media}
                    image={imageUrl}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    data-testid="addtocart"
                    size="small"
                    color="primary"
                    disabled={added}
                    onClick={onClick}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    );
};

export default Product;
