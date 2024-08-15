import { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = async (url) => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.error('Data not fetched:', error);
        throw error;
    }
};

export const useProducts = () => {
    const { data, error, mutate } = useSWR('https://fakestoreapi.com/products', fetcher);
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(true);
    };

    const products = Array.isArray(data) ? data : [];
    const productsToShow = showAll ? products : products.slice(0, 8);

    return { data: products, error, mutate, handleShowAll, showAll, productsToShow };
};

