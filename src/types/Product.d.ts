/* eslint-disable no-unused-vars */
interface IProduct {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: { rate: number; count: number };
    title: string;
    quantity?: number;
    hasPrime?: boolean;
    ratings?: number[];
}

interface IAddToBasket {
    payload: IProduct;
}
interface IRemoveFromBasket {
    payload: number;
}
