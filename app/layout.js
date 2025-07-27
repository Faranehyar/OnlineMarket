import BootstrapClient from "@/components/libraries/Bootstrap";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body >
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
