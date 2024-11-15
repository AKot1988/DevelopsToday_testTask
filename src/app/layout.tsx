import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "./(components)";
import classes from "./layout.module.scss";

export const metadata: Metadata = {
  title: "the Car Dealer App",
  description: "here ise the test ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classes.mainLayout}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
