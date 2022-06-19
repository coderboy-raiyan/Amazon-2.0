/* eslint-disable class-methods-use-this */
import httpReq from "./http.service";

class ProductServices {
    async getProducts() {
        const { data } = await httpReq.get("/products");
        return data;
    }
}

const ProductHttpReq = new ProductServices();

export default ProductHttpReq;
