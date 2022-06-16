import Header from "components/molecules/Header/Header";
import Head from "next/head";

function Home() {
    return (
        <div>
            <Head>
                <title>Amazon 2.0</title>
            </Head>

            <Header />
        </div>
    );
}

export default Home;
