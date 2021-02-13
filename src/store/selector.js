import { selector } from "recoil";
import { products, filterProductsValue } from "./atom";

export const filterProducts = selector({
  key: "filteredProducts",
  get: ({ get }) => {
    const productsState = get(products);
    const filterProductsValueState = get(filterProductsValue);

    if (filterProductsValueState.length) {
      return productsState.filter((item) =>
        item.name.includes(filterProductsValueState.trim())
      );
    }
    return products;
  },
});
