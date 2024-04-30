'use client'

import { Suspense, use } from "react"
import { IntlProvider } from "react-intl"

export const I18Provider = ({ children }) => {
  const _locale = 'ru';

  const messages = use(import(`../../../translations//${_locale}.json`));

  return (
    <Suspense fallback={<p>loading...</p>}>
      <IntlProvider locale="en" messages={messages}>
        {children}
      </IntlProvider>
    </Suspense>
  )
}