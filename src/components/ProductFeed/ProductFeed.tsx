import { Product } from "components/organisms";

function ProductFeed({ products }: { products: any }) {
    return (
        <div className="mx-auto grid grid-flow-row-dense md:-mt-52 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product: any) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductFeed;
