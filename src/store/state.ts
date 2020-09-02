// eslint-disable-next-line no-unused-vars
import { ProductItem } from '../global';

const INITIAL_STATE: ProductItem[] = [
    {
        id: '1',
        title: 'PS4 Pro',
        description:
            'Heighten your experiences. Enrich your adventures. Let the super-charged PS4™ Pro lead the way',
        imageUrl: '/ps4pro.jpg',
        price: 39999,
    },
    {
        id: '2',
        title: 'Xbox One X',
        description:
            'With 40% more power than any other console, experience immersive true 4K gaming. Games play better on Xbox One X',
        imageUrl: '/xbox-one-x.jpeg',
        price: 57500,
    },
    {
        id: '3',
        title: 'Nintendo Switch',
        description:
            'Nintendo Switch is designed to fit your life, transforming from home console to portable system in a snap.',
        imageUrl: '/switch.jpg',
        price: 29999,
    },
];

export { INITIAL_STATE };
