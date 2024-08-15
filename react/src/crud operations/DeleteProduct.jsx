const handleDeleteProduct = async (id) => {
    try {
        await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: 'DELETE',
        });
        // Optionally update the state to remove the deleted product from the list
    } catch (error) {
        console.error('Error deleting product:', error);
    }
};
