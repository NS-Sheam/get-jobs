const loadSingleJobData = async (id) => {
    const res = await fetch("/jobData.json");
    const data = await res.json();
    const selectedJob = data.find(singleData => +id === singleData.id);
    // console.log(selectedJob);
    return selectedJob;

}
export { loadSingleJobData };

// import { getShoppingCart, removeFromDb } from "../utilities/fakedb";

// const cartProductsLoader = async() => {
//     const loadedProducts = await fetch('products.json');
//     const products = await loadedProducts.json();
//     const savedCart = [];
//     const storedCart = getShoppingCart();
//     for (const id in storedCart) {
//         const addedProduct = products.find(pd => pd.id === id)
//         if(addedProduct){
//             const quantity = storedCart[id];
//             addedProduct.quantity = quantity;
//             savedCart.push(addedProduct);
//         }
        
//     }
//     return savedCart;
// }
// export default cartProductsLoader;