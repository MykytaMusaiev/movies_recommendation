import {CssBaseline} from "@mui/material";
import Router from "./router"
import {ApolloClient, ApolloLink, ApolloProvider, from, HttpLink, InMemoryCache} from '@apollo/client';
import {BASE_URL} from './config';
import {AppContext} from "./providers/context/appContext";
import {useContext} from "react";
import {I18nProvider, LOCALES} from "./providers/i18n";

const App = () => {
    const {state} = useContext(AppContext)

    const httpLink = new HttpLink({uri: BASE_URL});

    const localMiddleware = new ApolloLink((operation, forward) => {
        const customHeaders = operation.getContext().hasOwnProperty("headers") ? operation.getContext().headers : {};

        operation.setContext({
            headers: {
                ...customHeaders,
                locale: state.locale
            }
        })
        return forward(operation)
    })

    const client = new ApolloClient({
        link: from([localMiddleware, httpLink]),
        cache: new InMemoryCache(),
    });
    return (
        <>
            <ApolloProvider client={client}>
                <I18nProvider locale={state.locale}>
                    <CssBaseline/>
                    <Router/>
                </I18nProvider>
            </ApolloProvider>
        </>
    );
}

export default App;
