'use client'

import { FormattedMessage, useIntl } from "react-intl";

export default function Page() {
  const intl = useIntl();

  console.log('intl', intl)

  return (
    <>
      Hi
      <FormattedMessage id="navigation.topmenu.home" />
    </>
  )
}