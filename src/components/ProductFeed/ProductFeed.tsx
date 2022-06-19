import { Product } from "components/organisms";

function ProductFeed({ products }: { products: any }) {
    return (
        <div>
            {products.map((product: any) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductFeed;
