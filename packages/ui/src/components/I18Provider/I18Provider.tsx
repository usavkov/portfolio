'use client'

import { Suspense, use } from "react"
import { IntlProvider } from "react-intl"

export const I18Provider = ({ children, lang }) => {
  const messages = use(import(`../../../translations//${lang}.json`));

  return (
    <Suspense fallback={<p>loading...</p>}>
      <IntlProvider locale={lang} messages={messages}>
        {children}
      </IntlProvider>
    </Suspense>
  )
}