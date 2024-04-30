import { I18Provider } from "@components/I18Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const lang = 'en';

  return (
    <I18Provider lang={lang}>
      <html lang={lang}>
        <body>{children}</body>
      </html>
    </I18Provider>
  )
}
