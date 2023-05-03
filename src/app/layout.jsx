import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Store01",
  description: "pusing gw pikirin-nya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen-sm mx-auto my-12 px-4 flex flex-col gap-8">
          {children}
        </div>
      </body>
    </html>
  );
}
