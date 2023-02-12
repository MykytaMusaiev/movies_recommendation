import React, {Fragment, useContext} from 'react';
import {IntlProvider} from "react-intl";
import {LOCALES} from './constants';
import messages from "./messages"
import {AppContext} from "../context/appContext";
import PropTypes from "prop-types";

const IntlAppProvider = ({children, locale= LOCALES.ENGLISH}) => {
    const {state} = useContext(AppContext)
    return (
        <IntlProvider locale={state.locale}
                      textComponent={Fragment}
                      messages={messages[locale]}
        >
            {children}
        </IntlProvider>
    )
}

IntlAppProvider.displayName = 'I18nProvider'

IntlAppProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    locale: PropTypes.oneOf(Object.values(LOCALES)),
}

IntlAppProvider.defaultProps = {
    locale: LOCALES.ENGLISH,
};

export default IntlAppProvider;