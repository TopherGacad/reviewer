import "./globals.css";
import { Poppins } from "next/font/google";

import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToastContainer
          position="top-center"
          autoClose={3000}
        />
        <MyHeader />
        {children}
        <MyFooter />
      </body>
    </html>
  );
}
