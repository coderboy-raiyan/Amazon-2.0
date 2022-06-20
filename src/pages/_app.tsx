/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import "styles/globals.scss";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;
