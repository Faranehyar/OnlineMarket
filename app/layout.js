import BootstrapClient from "@/components/libraries/Bootstrap";
import "./globals.css";
import Header from "@/components/layout/header";
import Toastify from "@/components/libraries/Toastify"


export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body >
        <Header/>
        {children}
        <BootstrapClient />
        <Toastify />
  
      </body>
    </html>
  );
}
