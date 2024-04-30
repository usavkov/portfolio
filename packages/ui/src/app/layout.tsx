import { I18Provider } from "@components/I18Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <I18Provider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </I18Provider>
  )
}
