import { ProductFeed } from "components";
import { Banner, Header } from "components/molecules";
import Head from "next/head";
import ProductHttpReq from "services/Produdt.services";

function Home({ products }: { products: any }) {
    return (
        <div className="bg-gray-100">
            <Head>
                <title>Amazon 2.0</title>
            </Head>

            <Header />

            <main className="mx-auto max-w-screen-2xl">
                {/* Banner */}
                <Banner />

                {/* Product Feed */}
                <ProductFeed products={products} />
            </main>
        </div>
    );
}

export default Home;

export const getServerSideProps = async () => {
    const products = await ProductHttpReq.getProducts();

    return {
        props: { products },
    };
};
