import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spendo",
  description: "AI financial platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header */}
        <Header/>
        <main className="min-h-screen">{children}</main>
        <Toaster richColors />
        {/* footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with 💗 by Spendo — Smarter Money Management, Made Simple.</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
