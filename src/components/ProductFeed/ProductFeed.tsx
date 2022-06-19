import { Product } from "components/organisms";

function ProductFeed({ products }: { products: any }) {
    return (
        <div className="mx-auto grid grid-flow-row-dense md:-mt-52 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.slice(0, 4).map((product: any) => (
                <Product key={product.id} product={product} />
            ))}

            <img className="col-span-full" src="https://links.papareact.com/dyz" alt="" />

            <div className="md:col-span-2">
                {products.slice(4, 5).map((product: any) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>

            {products.slice(5, products.length).map((product: any) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductFeed;
