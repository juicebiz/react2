import initCartApi from "./cart";
import initProductsApi from "./products";

export default function initApi(http){
  const cart = initCartApi(http);
  const products = initProductsApi(http);

  return {
    cart, 
    products
  }
}