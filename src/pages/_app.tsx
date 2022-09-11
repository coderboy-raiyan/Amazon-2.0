/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "redux/Store/Store";
import "styles/globals.scss";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading="loading" persistor={persistor}>
                <SessionProvider session={session}>
                    <Component {...pageProps} />
                </SessionProvider>
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
