import "./globals.css";
import { DefaultHeader, DefaultFooter } from "@/components/globals/";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DefaultHeader />
        {children}
        <DefaultFooter />
      </body>
    </html>
  );
}
