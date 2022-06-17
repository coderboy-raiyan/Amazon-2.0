import { Banner, Header } from "components/molecules";
import Head from "next/head";

function Home() {
    return (
        <div className="bg-gray-100">
            <Head>
                <title>Amazon 2.0</title>
            </Head>

            <Header />

            <main className="mx-auto max-w-screen-2xl">
                {/* Banner */}
                <Banner />
            </main>
        </div>
    );
}

export default Home;
