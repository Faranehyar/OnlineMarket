import BootstrapClient from "@/components/libraries/Bootstrap";
import "./globals.css";
import Header from "@/components/layout/header";



export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body >
        <Header/>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
