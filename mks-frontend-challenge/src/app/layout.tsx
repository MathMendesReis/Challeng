import { DefaultProvider } from "@/components/default-provider/default-provider"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <DefaultProvider>
          <body>
            {children}
          </body>
      </DefaultProvider>
    </html>
  )
}